const express = require("express");
const router = express.Router();

const {
  createPost,
  getPosts,
  getPost,
  updatePost,
  deletePost,
} = require("../controllers/post.controller");

router.get("/", getPosts);
router.get("/:id", getPost);
router.post("/", createPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
module.exports = router;
