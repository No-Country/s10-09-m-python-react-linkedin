const { JobPreferences } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getJobPreferencesByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    // Busca todas las preferencias de empleo por ID de usuario
    const jobPreferences = await JobPreferences.findAll({
      where: { usersCustomuserId: userId },
    });

    res.status(200).json(jobPreferences);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createJobPreferences = async (req, res) => {
  try {
    const { data_preference, usersCustomuserId, JobId } = req.body;

    const newJobPreference = await JobPreferences.create({
      data_preference,
      usersCustomuserId,
      JobId,
    });

    res.status(201).json(newJobPreference);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const deleteJobPreferenceByUserAndJob = async (req, res) => {
  try {
    const userId = req.params.userId;
    const jobId = req.params.jobId;

    const deletedRows = await JobPreferences.destroy({
      where: { usersCustomuserId: userId, JobId: jobId },
    });

    if (deletedRows === 0) {
      return res
        .status(404)
        .json({ error: "Preferencia de empleo no encontrada." });
    }

    res
      .status(200)
      .json({ message: "Preferencia de empleo borrada exitosamente." });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = {
  createJobPreferences,
  getJobPreferencesByUser,
  deleteJobPreferenceByUserAndJob,
};
