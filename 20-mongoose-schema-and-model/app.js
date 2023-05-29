const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { logError } = require("./utils/logMessages");

const productsRoute = require("./routes/productsRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// All Routes
app.use("/api/products", productsRoute);

// Home route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Mongoose Schema and Model</h1>");
});

// Handle 404 Route not found
app.use((req, res, next) => {
  logError("404 route not found!");
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
