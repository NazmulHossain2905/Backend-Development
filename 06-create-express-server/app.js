const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the Express server.",
    author: "Nazmul Hossain",
    date: "25/05/2023",
  });
});

module.exports = app;
