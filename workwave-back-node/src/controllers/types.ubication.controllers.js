const { Types_of_ubication } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getAllTypesUbication = async (req, res) => {
  try {
    const typesUbication = await Types_of_ubication.findAll();
    res.status(200).json(typesUbication);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createTypesUbication = async (req, res) => {
  try {
    const { body } = req;

    const existingTypes = await Promise.all(
      body.map(async (type) => {
        const existingType = await Types_of_ubication.findOne({
          where: { name: type.name },
        });
        return existingType;
      })
    );

    const duplicateTypes = existingTypes.filter((type) => type !== null);

    if (duplicateTypes.length > 0) {
      return res
        .status(400)
        .json({ message: "Algunos tipos de ubicación ya existen." });
    }

    const newTypes = await Types_of_ubication.bulkCreate(body);
    res.status(201).json(newTypes);
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createTypesUbication };

module.exports = { createTypesUbication, getAllTypesUbication };
