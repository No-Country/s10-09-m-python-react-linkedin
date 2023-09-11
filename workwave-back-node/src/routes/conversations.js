const express = require("express");
const router = express.Router();

const {
  createConversation,
  getConversationByUser,
  getConversationTwoUsers,
} = require("../controllers/conversation.controllers");
router.post("/", createConversation);
router.get("/:userId", getConversationByUser);
router.get("/find/:firstUserId/:secondUserId", getConversationTwoUsers);

module.exports = router;
