const express = require("express");
const router = express.Router();

const { createComments } = require("../controllers/comments.controller");

router.post("/", createComments);
module.exports = router;
