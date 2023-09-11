const express = require("express");
const router = express.Router();

const {
  createTypesEmployment,
  getAllTypesEmployment,
} = require("../controllers/types.employment.controllers");
// router.get("/", createExperience);
router.get("/", getAllTypesEmployment);
router.post("/", createTypesEmployment);
module.exports = router;
