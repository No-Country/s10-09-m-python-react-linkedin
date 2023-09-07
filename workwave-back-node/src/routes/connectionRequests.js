const express = require("express");
const router = express.Router();

const {
  createConnection,
  updateConnection,
  getConnections,
  deleteConnection,
} = require("../controllers/connectionRequests.controllers");

router.get("/", getConnections);
router.post("/", createConnection);
router.put("/:id", updateConnection);
router.delete("/:id", deleteConnection);
module.exports = router;
