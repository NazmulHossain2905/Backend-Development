const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const { usersRoute } = require("./routes/usersRoute");

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", usersRoute);

// Home route
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("views/index.html"));
});

// Handle 404 Route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "404 route not found!",
    route: req.url,
    method: req.method,
  });
});

// Handle server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error | " + err.message,
    error: err,
  });
});

module.exports = app;
