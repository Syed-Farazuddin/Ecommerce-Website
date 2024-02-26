const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello server");
});

app.listen(4000, () => {
  console.log("Server started on port 4000");
});
