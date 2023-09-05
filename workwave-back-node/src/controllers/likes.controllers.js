const { Likes } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getLikes = async (req, res) => {
  try {
    const likes = await Likes.findAll();
    res.status(200).json(likes);
  } catch (error) {
    handleHttpError(error, res);
  }
};

const createLike = async (req, res) => {
  try {
    const { usersCustomuserId, postId } = req.body;

    const existingLike = await Likes.findOne({
      where: { userId, postId },
    });

    if (existingLike) {
      // Si existe un registro de like, elimínalo
      await existingLike.destroy();
      res.status(200).json({ message: "Like eliminado" });
    } else {
      // Si no existe un registro de like, crea uno nuevo
      await Likes.create({ usersCustomuserId, postId });
      res.status(201).json({ message: "Like agregado" });
    }
  } catch (error) {
    handleHttpError(error, res);
  }
};
module.exports = { createLike, getLikes };
