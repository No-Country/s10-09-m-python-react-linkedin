const express = require("express");
const router = express.Router();

const {
  createTypesUbication,
  getAllTypesUbication,
} = require("../controllers/types.ubication.controllers");
// router.get("/", createExperience);
router.get("/", getAllTypesUbication);
router.post("/", createTypesUbication);
module.exports = router;
