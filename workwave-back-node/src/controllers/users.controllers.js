const { Users_customuser } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const createUser = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const data = await Users_customuser.create(body);
    if (!data || data.length === 0) {
      handleHttpError(res, "No existe datos de post");
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createUser };
