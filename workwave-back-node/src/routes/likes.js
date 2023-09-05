const express = require("express");
const router = express.Router();

const { createLike } = require("../controllers/likes.controllers");

router.post("/", createLike);
module.exports = router;
