const express = require("express");
const router = express.Router();

const {
  createTypesEmployment,
} = require("../controllers/types.employment.controllers");
// router.get("/", createExperience);
router.post("/", createTypesEmployment);
module.exports = router;
