const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  createNewProduct,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productsController");

router.get("/", getAllProducts);
router.post("/", createNewProduct);
router.get("/:id", getProductById);
router.patch("/:id", updateProductById);
router.delete("/:id", deleteProductById);

module.exports = router;
