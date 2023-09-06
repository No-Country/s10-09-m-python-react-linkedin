const { Comments } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const createComments = async (req, res) => {
  try {
    const { body } = req;
    const data = await Comments.create(body);

    if (!data) {
      return handleHttpError(res, "No se pudo crear el comentario", 400);
    }

    res.status(201).json(data);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createComments };
