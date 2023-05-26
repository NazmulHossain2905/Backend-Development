const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const productRoute = require("./routes/productRoute");

app.use("/product", productRoute);

module.exports = app;
