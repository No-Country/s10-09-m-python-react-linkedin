const { Education } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getAllEducations = async (req, res) => {
  try {
    const educations = await Education.findAll();
    res.status(200).json(educations);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const getEducationById = async (req, res) => {
  try {
    const educationId = req.params.id;
    const education = await Education.findByPk(educationId);

    if (!education) {
      return res.status(404).json({ error: "Educación no encontrada." });
    }

    res.status(200).json(education);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createEducation = async (req, res) => {
  try {
    const {
      educational_institution,
      degree,
      academic_discipline,
      note,
      description,
      start_date,
      end_date,
      activities_and_groups,
      usersCustomuserId,
    } = req.body;

    const newEducation = await Education.create({
      educational_institution,
      degree,
      academic_discipline,
      note,
      description,
      start_date,
      end_date,
      activities_and_groups,
      usersCustomuserId,
    });

    res.status(201).json(newEducation);
  } catch (error) {
    console.error(error);

    handleHttpError(res, { error: error.message }, 500);
  }
};
const updateEducation = async (req, res) => {
  try {
    const educationId = req.params.id;
    const updatedEducationData = req.body;

    const education = await Education.findByPk(educationId);

    if (!education) {
      return res.status(404).json({ error: "Educación no encontrada." });
    }

    await education.update(updatedEducationData);

    res.status(200).json(updatedEducationData);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const deleteEducationById = async (req, res) => {
  try {
    const educationId = req.params.id;
    const education = await Education.findByPk(educationId);

    if (!education) {
      return res.status(404).json({ error: "Educación no encontrada." });
    }

    await education.destroy();

    res.status(200).json({ message: "education eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = {
  createEducation,
  getAllEducations,
  getEducationById,
  updateEducation,
  deleteEducationById,
};
