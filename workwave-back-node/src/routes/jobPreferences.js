const express = require("express");
const router = express.Router();

const {
  createJobPreferences,
} = require("../controllers/jobPreferences.controllers");

router.post("/", createJobPreferences);
module.exports = router;
