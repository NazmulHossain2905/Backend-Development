const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const usersRoute = require("./routes/usersRoute");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/index.html");
});

// Routes
app.use("/api/users", usersRoute);

// Handle route not found error
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    route: req.method + " " + req.url,
    message: "404 Route not found",
  });
});

// Handle server error
app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: "Server error, ERROR: " + err.message,
    error: err,
  });
});

module.exports = app;
