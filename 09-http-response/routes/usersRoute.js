const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  res.status(201).json({
    message: "User create successfully",
  });
});

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All users return",
  });
});

// Response json
router.get("/:id", (req, res) => {
  res.status(200).json({
    message: "id " + req.params.id,
  });
});

// Response text message
router.put("/:id", (req, res) => {
  res.status(200).send(req.params.id + " User update successfully");
});

// Redirect to page
router.delete("/:id", (req, res) => {
  res.status(200).redirect("/login");
});

module.exports = router;
