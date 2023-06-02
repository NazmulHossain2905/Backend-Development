const express = require("express");
const {
  registerNewUser,
  loginUser,
  findAllUsers,
  findOneUserById,
} = require("../controllers/authController");

const authRoute = express.Router();

authRoute.post("/register", registerNewUser);
authRoute.post("/login", loginUser);
authRoute.get("/", findAllUsers);
authRoute.get("/:id", findOneUserById);

module.exports = authRoute;
