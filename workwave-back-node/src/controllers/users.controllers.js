const { Users_customuser } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getUsers = async (re, res) => {
  try {
    const users = await Users_customuser.findAll();
    res.status(200).json(users);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};
const getUser = async (req, res) => {
  const userId = req.query.userId;
  const username = req.query.username;

  try {
    let user;
    if (userId) {
      user = await Users_customuser.findByPk(userId);
    } else if (username) {
      user = await Users_customuser.findOne({ where: { username: username } });
    }

    if (user) {
      const { password, updatedAt, ...other } = user.toJSON();
      res.status(200).json(other);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
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

module.exports = { createUser, getUsers, getUser };
