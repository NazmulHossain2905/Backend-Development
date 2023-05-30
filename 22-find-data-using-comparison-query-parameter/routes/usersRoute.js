const express = require("express");
const {
  createNewUser,
  getAllUsers,
  getSingleUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/", createNewUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUserById);
router.patch("/:id", updateUserById);
router.delete("/:id", deleteUserById);

exports.usersRoute = router;
