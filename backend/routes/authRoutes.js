const express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const {
  register,
  login,
  testController,
} = require("../controllers/AuthController");

const router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/test", requireSignIn, isAdmin, testController);

router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

module.exports = router;
