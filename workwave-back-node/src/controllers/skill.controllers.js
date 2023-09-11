const { Skill } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getAllSkills = async (req, res) => {
  try {
    const skills = await Skill.findAll();

    res.status(200).json(skills);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const createSkill = async (req, res) => {
  try {
    const { skill_name, usersCustomuserId } = req.body;

    const newSkill = await Skill.create({
      skill_name,
      usersCustomuserId,
    });

    res.status(201).json(newSkill);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};
const deleteSkillById = async (req, res) => {
  try {
    const skillId = req.params.id;

    const deletedRows = await Skill.destroy({
      where: { id: skillId },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: "Skill no encontrado." });
    }

    res.status(200).json({ message: "skill eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createSkill, getAllSkills, deleteSkillById };
