const express = require("express");
const router = express.Router();

const {
  createTypesUbication,
} = require("../controllers/types.ubication.controllers");
// router.get("/", createExperience);
router.post("/", createTypesUbication);
module.exports = router;
