const express = require("express");
const app = express();

const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute);

// Route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
  });
});

// Server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
  });
});

module.exports = app;
