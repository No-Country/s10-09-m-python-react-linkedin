const { Types_of_employment } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getAllTypesEmployment = async (req, res) => {
  try {
    const typesEmployment = await Types_of_employment.findAll();
    res.status(200).json(typesEmployment);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createTypesEmployment = async (req, res) => {
  try {
    const { body } = req;

    const existingTypes = await Promise.all(
      body.map(async (type) => {
        const existingType = await Types_of_employment.findOne({
          where: { name: type.name },
        });
        return existingType;
      })
    );

    const duplicateTypes = existingTypes.filter((type) => type !== null);

    if (duplicateTypes.length > 0) {
      return res
        .status(400)
        .json({ message: "Algunos tipos de empleo ya existen." });
    }

    const newTypes = await Types_of_employment.bulkCreate(body);
    res.status(201).json(newTypes);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createTypesEmployment, getAllTypesEmployment };
