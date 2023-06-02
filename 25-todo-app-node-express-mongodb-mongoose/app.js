const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const authRoute = require("./routes/authRoute");
const todoRoute = require("./routes/totoRoute");
const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// All Routes
app.use("/api/users", authRoute);
app.use("/api/todo", todoRoute);

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});

// Handle route not found error
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "404 Route not found!",
    path: req.path,
    method: req.method,
  });
});

// Handle route not found error
app.use((err, req, res, next) => {
  res.status(404).json({
    success: false,
    message: `SERVER ERROR - ${err.message}`,
  });
});

module.exports = app;
