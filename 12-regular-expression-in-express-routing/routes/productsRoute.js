const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Return all products",
  });
});

router.get("/:id([0-9]+)", (req, res) => {
  const id = req.params.id;

  res.status(200).json({
    success: true,
    message: "You provide ID: " + id,
  });
});

router.get("/:title([a-zA-z0-9]+)", (req, res) => {
  const title = req.params.title;

  res.status(200).json({
    message: "Title is " + title,
  });
});

module.exports = router;
