const bcrypt = require("bcrypt");

const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (e) {
    console.log(e);
  }
};

const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashPassword);
};

module.exports = { hashPassword, comparePassword };
