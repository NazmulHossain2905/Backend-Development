const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createNewProduct,
  getCreateProductForm,
} = require("../controllers/productsController");

router.get("/", getAllProducts);
router.get("/create-product", getCreateProductForm);
router.post("/", createNewProduct);

module.exports = router;
