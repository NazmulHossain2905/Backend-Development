const Products = require("../models/ProductsModel");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();

    return res.status(200).json({
      success: true,
      total: products?.length,
      products,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.createNewProduct = async (req, res) => {
  try {
    const { title, description, price, rating, brand, category } = req?.body;

    const newProduct = new Products({
      title,
      description,
      price,
      rating,
      brand,
      category,
    });
    const product = await newProduct.save();

    return res.status(201).json({
      success: true,
      message: "Product create successfully",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const productId = req?.params?.id;
    const product = await Products.findOne({ _id: productId });

    if (product) {
      return res.status(200).json({
        success: true,
        message: "Product found",
        product,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not found!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const productId = req?.params?.id;
    const { title, description, price, rating, brand, category } = req?.body;

    const product = await Products.findOneAndUpdate(
      { _id: productId },
      {
        $set: {
          title: title,
          description: description,
          price: price,
          rating: rating,
          brand: brand,
          category: category,
        },
      }
    );

    return res.status(200).json({
      success: true,
      message: "Product update successfully!",
      //   product,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const productId = req?.params?.id;

    const product = await Products.findOneAndDelete({ _id: productId });

    if (product) {
      return res.status(200).json({
        success: true,
        message: "Product delete successfully!",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Product not exist!",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
