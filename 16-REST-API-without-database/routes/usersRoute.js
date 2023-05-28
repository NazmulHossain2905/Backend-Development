const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

router.get("/", getAllUsers);
router.post("/", createNewUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
