const express = require("express");
const app = express();

const productsRoute = require("./routes/productsRoute");

app.use("/api/products", productsRoute);

app.use("*", (req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

module.exports = app;
