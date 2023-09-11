const express = require("express");
const router = express.Router();
const {
  createMessage,
  getMessageByConversation,
} = require("../controllers/message.controllers");
router.post("/", createMessage);
router.get("/:conversationId", getMessageByConversation);

module.exports = router;
