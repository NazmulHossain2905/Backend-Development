const express = require("express");
const {
  registerNewUser,
  loginUser,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/register", registerNewUser);
router.post("/login", loginUser);

exports.usersRoute = router;
