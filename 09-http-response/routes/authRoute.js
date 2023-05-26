const express = require("express");
const router = express.Router();

const path = require("path");

// Send html file
router.get("/register", (req, res) => {
  res.status(200).sendFile(path.resolve("views/register.html"));
});

// Send html file
router.get("/login", (req, res) => {
  res.status(200).sendFile(path.resolve("views/login.html"));
});

router.post("/register", (req, res) => {
  res.status(201).json({
    message: "User create successfully",
  });
});

// send cookie and headers using res.append()
router.post("/login", (req, res) => {
  res.cookie("token", "TOKEN-001");
  res.append("author", "Nazmul Hossain");
  res.status(200).json({
    message: "User login successfully",
  });
});

module.exports = router;
