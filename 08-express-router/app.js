const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.use("/api/user", userRouter);

// route error
app.use((req, res, next) => {
  res.status(404).json({
    message: "Route not found",
    path: req.url,
    method: req.method,
    // message: `Not set ${req.url} at ${req.method} request.`,
    // message: req.url + " route not found " + req.method,
  });
});

// server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server problems",
  });
});

module.exports = app;
