const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.status(200).sendFile(path.resolve("views/index.html"));
});

// Route not found
app.use((req, res, next) => {
  res.status(404).send("<h1>404 Page Not Found!!</h1>");
});

// Handle server error.
app.use((err, req, res, next) => {
  console.log(err);
  res
    .status(500)
    .send(`<div><h1>Server Problems ❌💀❌</h1><h3>${err.message}</h3></div>`);
});

module.exports = app;
