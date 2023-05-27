const express = require("express");
const router = express.Router();

const {
  getUserForm,
  createNewUser,
  getAllUsers,
} = require("../controllers/usersController");

router.get("/", getAllUsers);
router.get("/create-user", getUserForm);
router.post("/", createNewUser);

module.exports = router;
