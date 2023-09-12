const { Conversation } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");
const { Op } = require("sequelize");
// Crear una nueva conversación
const createConversation = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const newConversation = await Conversation.create({
      members: [senderId, receiverId],
    });

    res.status(200).json(newConversation);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

// Obtener conversaciones de un usuario
const getConversationByUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log(userId);
    const conversations = await Conversation.findAll({
      where: {
        members: {
          [Op.contains]: [userId],
        },
      },
    });

    res.status(200).json(conversations);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

// Obtener una conversación que incluye dos usuarios
const getConversationTwoUsers = async (req, res) => {
  try {
    const firstUserId = req.params.firstUserId;
    const secondUserId = req.params.secondUserId;
    const conversation = await Conversation.findOne({
      where: {
        members: {
          [Op.contains]: [firstUserId, secondUserId],
        },
      },
    });

    res.status(200).json(conversation);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = {
  createConversation,
  getConversationByUser,
  getConversationTwoUsers,
};
