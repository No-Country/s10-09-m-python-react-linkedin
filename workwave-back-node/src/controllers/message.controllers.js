const { Message } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

// Crear un nuevo mensaje
const createMessage = async (req, res) => {
  try {
    const { text, ConversationId, usersCustomuserId } = req.body;
    const newMessage = await Message.create({
      text,
      ConversationId,
      usersCustomuserId,
    });
    res.status(200).json(newMessage);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

// Obtener mensajes por conversación
const getMessageByConversation = async (req, res) => {
  try {
    const ConversationId = req.params.conversationId;
    const messages = await Message.findAll({
      where: { ConversationId },
    });
    res.status(200).json(messages);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createMessage, getMessageByConversation };
