const express = require("express");
const router = express.Router();

const {
  createUser,
  getUsers,
  getUser,
} = require("../controllers/users.controllers");

router.get("/", getUser);
router.get("/", getUsers);
router.post("/", createUser);

module.exports = router;
