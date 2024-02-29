const JWT = require("jsonwebtoken");
const userModel = require("../models/userModel");
const requireSignIn = async (req, res, next) => {
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      process.env.JWT_SECRET
    );
    req.user = decode;
    next();
  } catch (e) {
    console.log(e);
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const user = await userModel.findById(req.user._id);
    if (user.role !== 1) {
      return res
        .status(401)
        .send({ success: false, message: "Unauthorized access" });
    } else {
      next();
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = { requireSignIn, isAdmin };
