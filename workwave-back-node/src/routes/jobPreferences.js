const express = require("express");
const router = express.Router();

const {
  createJobPreferences,
  getJobPreferencesByUser,
  deleteJobPreferenceByUserAndJob,
} = require("../controllers/jobPreferences.controllers");

router.get("/:userId", getJobPreferencesByUser);
router.post("/", createJobPreferences);
router.delete("/:userId/:jobId", deleteJobPreferenceByUserAndJob);
module.exports = router;
