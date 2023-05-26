const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { id, title, description, price } = req.body;

  res.status(201).json({
    message: "Product create successfully",
    product: {
      id,
      title,
      description,
      price,
    },
  });
});

module.exports = router;
