const express = require("express");
const router = express.Router();

const {
  createJobs,
  getTotalJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobs.controller");

router.get("/", getTotalJobs);
router.get("/:id", getJobById);
router.post("/", createJobs);
router.put("/:id", updateJob);
router.delete("/:id", deleteJob);
module.exports = router;
