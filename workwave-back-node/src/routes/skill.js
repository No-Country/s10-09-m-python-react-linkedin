const express = require("express");
const router = express.Router();

const {
  createSkill,
  getAllSkills,
  deleteSkillById,
} = require("../controllers/skill.controllers");

router.get("/", getAllSkills);
router.post("/", createSkill);
router.delete("/:id", deleteSkillById);
module.exports = router;
