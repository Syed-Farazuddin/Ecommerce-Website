const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { hashPassword, comparePassword } = require("../helpers/authHelpers");

const register = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    // Validation
    if (!name) {
      return res.send({ error: "Name is required" });
    }
    if (!email) {
      return res.send({ error: "Email is required" });
    }
    if (!password) {
      return res.send({ error: "Password is required" });
    }
    if (!phone) {
      return res.send({ error: "Phone is required" });
    }
    if (!address) {
      return res.send({ error: "Address is required" });
    }
    const AlreadyRegistered = await userModel.findOne({ email });

    if (AlreadyRegistered) {
      return res.status(200).send({
        success: true,
        message: "Already Registered! Please login to continue",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();
    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: `Error in registration`,
      error: e,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "Email is not registered" });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res
        .status(200)
        .send({ success: false, message: "Invalid password" });
    }
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Login successfully",
      user: {
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({ success: false, message: "Error in login", e });
  }
};

const testController = (req, res) => {
  res.send("Protected Route");
  console.log("Admin has logged in");
};

module.exports = { register, login, testController };
