const express = require("express");
const router = express.Router();

// Route parameter - 1
router.get("/:id", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    message: "Success Route Parameter",
    productId: id,
  });
});

// Route parameter - 2
router.get("/productId/:id/productPrice/:price", (req, res) => {
  const id = req.params.id;
  const price = req.params.price;

  res.status(200).json({
    message: "Success Route Parameter",
    productId: id,
    productPrice: price,
  });
});

// Query parameter
router.get("/", (req, res) => {
  const { id, price } = req.query;

  res.status(200).json({
    message: "Success Query Parameter",
    productId: id,
    productPrice: price,
  });
});

// Get data from Headers
router.get("/header", (req, res) => {
  const id = req.header("id");
  const name = req.header("productName");

  res.status(200).json({
    message: "Success Header Parameter",
    productId: id,
    productName: name,
  });
});

module.exports = router;
