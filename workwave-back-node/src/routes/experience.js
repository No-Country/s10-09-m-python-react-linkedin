const express = require("express");
const router = express.Router();

const {
  createExperience,
  getExperience,
} = require("../controllers/experience.controller");
router.get("/", getExperience);
router.post("/", createExperience);
module.exports = router;
