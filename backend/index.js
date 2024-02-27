const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./db");
const colors = require("colors");
const bcrypt = require("bcrypt");
const { register } = require("./controllers/AuthController");
const authRoute = require("./routes/authRoutes");
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(authRoute);

// app.post("/register", register);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`.bgCyan);
});
