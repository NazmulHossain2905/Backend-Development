const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const { usersRoute } = require("./routes/usersRoute");
const { postsRoute } = require("./routes/postsRoute");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);

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
