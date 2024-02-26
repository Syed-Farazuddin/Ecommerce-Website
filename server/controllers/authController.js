const hashPassword = require("../helpers/authHelper");
const userModel = require("../models/UserModel");
const registerController = async (req, res) => {
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

module.exports = { registerController };
