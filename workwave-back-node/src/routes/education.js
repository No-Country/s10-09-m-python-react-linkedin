const express = require("express");
const router = express.Router();

const {
  createEducation,
  getAllEducations,
  getEducationById,
  updateEducation,
  deleteEducationById,
} = require("../controllers/education.controllers");

router.post("/", createEducation);
router.get("/", getAllEducations);
router.get("/:id", getEducationById);
router.put("/:id", updateEducation);
router.delete("/:id", deleteEducationById);
module.exports = router;
