const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({
    message: "All users",
  });
});

// Middleware function
const myMiddleware = (req, res, next) => {
  console.log("I am middleware");

  req.name = "Nazmul Hossain";
  req.age = 23;

  next();
};

router.post("/", myMiddleware, (req, res) => {
  console.log("I am post route");

  const name = req.name;
  const age = req.age;

  res.status(201).json({
    message: "Success",
    user: {
      name,
      age,
    },
  });
});

module.exports = router;
