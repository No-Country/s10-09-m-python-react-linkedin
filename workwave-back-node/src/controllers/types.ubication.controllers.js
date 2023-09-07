const { Types_of_ubication } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");
const createTypesUbication = async (req, res) => {
  try {
    const { body } = req;
    const data = await Types_of_ubication.bulkCreate(body);
    res.status(201).json(data);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createTypesUbication };
