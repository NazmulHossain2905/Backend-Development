const express = require("express");
const app = express();

// HTTP routes

app.get("/", (req, res) => {
  res.send("<h1>I am GET route at home</h1>");
});

app.post("/", (req, res) => {
  res.send({ message: "I am POST route at home" });
});

app.put("/", (req, res) => {
  res.send({ message: "I am PUT route at home" });
});

app.delete("/", (req, res) => {
  res.send({ message: "I am DELETE route at home" });
});

module.exports = app;
