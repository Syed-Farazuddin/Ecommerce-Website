const mongoose = require("mongoose");
const colors = require("colors");
const connectDB = () => {
  try {
    mongoose
      .connect("mongodb://127.0.0.1:27017/ecommerce")
      .then(() => {
        console.log("Connected to database".bgWhite.blue);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
};

module.exports = connectDB;
