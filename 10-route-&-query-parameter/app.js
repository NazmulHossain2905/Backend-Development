const express = require("express");
const app = express();
const productRoute = require("./routes/productRoute");

app.use("/product", productRoute);

// Handle route error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Handle server error
app.use((err, req, res, next) => {
  res.status(404).json({
    message: "Server error",
  });
});

module.exports = app;
