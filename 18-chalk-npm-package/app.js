const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("products", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Show all products",
  });
});

module.exports = app;
