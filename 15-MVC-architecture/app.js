const express = require("express");
const app = express();

const usersRoute = require("./routes/usersRoute");
const productRoute = require("./routes/productsRoute");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/users", usersRoute);
app.use("/products", productRoute);

// Handle route not found
app.use((req, res, next) => {
  res.status(404).json({
    message: "404 Route not found!!!",
  });
});

// Handle server error
app.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    err,
  });
});

module.exports = app;
