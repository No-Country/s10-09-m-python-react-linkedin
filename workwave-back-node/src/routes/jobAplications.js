const express = require("express");
const router = express.Router();

const {
  createJobAplication,
} = require("../controllers/jobAplications.controllers");

router.post("/", createJobAplication);
module.exports = router;
