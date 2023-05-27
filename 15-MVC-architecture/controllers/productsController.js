const path = require("path");
const products = require("../models/productsModel");

exports.getAllProducts = (req, res) => {
  res.status(200).json({
    success: true,
    totalProducts: products.length,
    products,
  });
};

exports.getCreateProductForm = (req, res) => {
  res.status(200).sendFile(path.resolve("views/products.html"));
};

exports.createNewProduct = (req, res) => {
  const { title, description, price } = req.body;

  const newProduct = {
    title,
    description,
    price,
  };

  products.push(newProduct);

  res.status(201).json({
    success: true,
    message: "Product create successfully",
    products,
  });
};
