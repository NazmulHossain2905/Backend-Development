const express = require("express");
const {
  createNewPost,
  getAllPosts,
  getSinglePostById,
  updatePostById,
  deletePostById,
} = require("../controllers/postsController");

const router = express.Router();

router.post("/", createNewPost);
router.get("/", getAllPosts);
router.get("/:id", getSinglePostById);
router.patch("/:id", updatePostById);
router.delete("/:id", deletePostById);

exports.postsRoute = router;
