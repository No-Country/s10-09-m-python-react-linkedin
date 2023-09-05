const {
  Experience,
  Types_of_employment,
  Types_of_ubication,
  Users_customuser,
} = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getExperience = async (req, res) => {
  try {
    const experience = await Experience.findAll({
      include: [
        {
          model: Users_customuser,
          //   attributes: ["id", "firstName", "lastName"],
        },
        {
          model: Types_of_employment,
          attributes: ["id", "name"],
        },
        {
          model: Types_of_ubication,
          attributes: ["id", "name"],
        },
      ],
      attributes: {
        exclude: [
          "typesOfEmploymentId",
          "typesOfUbicationId",
          "users_customuser",
        ],
      },
    });

    if (experience) {
      res.status(200).json(experience);
    } else {
      handleHttpError(res, "No existe la cita", 404);
    }
  } catch (error) {
    console.log(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createExperience = async (req, res) => {
  try {
    const { body } = req;
    console.log(body);
    const data = await Experience.create(body);
    if (!data || data.length === 0) {
      handleHttpError(res, "No existe datos de experience");
      return;
    }
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const updateExperience = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      job_position,
      company_name,
      ubication,
      sector,
      description,
      start_date,
      end_date,
      typesOfEmploymentId,
      typesOfUbicationId,
      usersCustomuserId,
    } = req.body;

    const updatedExperience = await Experience.findByPk(id);

    if (!updatedExperience) {
      return res.status(404).json({ error: "No se encontró la experiencia" });
    }

    updatedExperience.job_position = job_position;
    updatedExperience.company_name = company_name;
    updatedExperience.ubication = ubication;
    updatedExperience.sector = sector;
    updatedExperience.description = description;
    updatedExperience.start_date = start_date;
    updatedExperience.end_date = end_date;
    updatedExperience.typesOfEmploymentId = typesOfEmploymentId;
    updatedExperience.typesOfUbicationId = typesOfUbicationId;
    updatedExperience.usersCustomuserId = usersCustomuserId;

    await updatedExperience.save();

    return res
      .status(200)
      .json({ message: "¡Experiencia actualizada exitosamente!" });
  } catch (error) {
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createExperience, getExperience, updateExperience };
