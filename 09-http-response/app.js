const express = require("express");
const app = express();
const path = require("path");

const usersRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");

app.use("/", authRoute);
app.use("/api/users", usersRoute);

// Home page -> send html response.
app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("views/index.html"));
});

// Handle route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: req.url + " 💀 route not found.",
  });
});

//  Handle server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: "Server error",
  });
});

module.exports = app;
