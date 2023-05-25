const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All users",
  });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "User created successfully",
  });
});

router.put("/", (req, res) => {
  res.status(200).json({
    message: "User update successfully",
  });
});

router.delete("/", (req, res) => {
  res.status(200).json({
    message: "User deleted successfully",
  });
});

module.exports = router;
