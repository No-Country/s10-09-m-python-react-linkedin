const express = require("express");
const router = express.Router();

const {
  createJobApplication,
  getJobApplicationsByUser,
  deleteJobApplicationByUserAndJob,
} = require("../controllers/jobAplications.controllers");

router.get("/:id", getJobApplicationsByUser);
router.post("/", createJobApplication);
router.delete("/:userId/:jobId", deleteJobApplicationByUserAndJob);
module.exports = router;
