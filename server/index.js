const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
require("./db/index");
const morgan = require("morgan");
const authRoutes = require("./routes/authRoute");

dotenv.config();
const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes

app.use("/api/v1/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello server");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`.bgMagenta.white);
});
