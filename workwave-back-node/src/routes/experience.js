const express = require("express");
const router = express.Router();

const {
  createExperience,
  getExperience,
  updateExperience,
} = require("../controllers/experience.controller");
router.get("/", getExperience);
router.post("/", createExperience);
router.put("/:id", updateExperience);
module.exports = router;
