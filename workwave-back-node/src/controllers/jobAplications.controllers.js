const { JobApplication } = require("../config/db");
const { handleHttpError } = require("../utils/handleError");

const getJobApplicationsByUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const jobApplications = await JobApplication.findAll({
      where: { usersCustomuserId: userId },
    });

    res.status(200).json(jobApplications);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const createJobApplication = async (req, res) => {
  try {
    const { cv, resume, reason_for_interest, usersCustomuserId, JobId } =
      req.body;

    const jobApplication = await JobApplication.create({
      cv,
      resume,
      reason_for_interest,
      usersCustomuserId,
      JobId,
    });

    res.status(201).json(jobApplication);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const deleteJobApplicationByUserAndJob = async (req, res) => {
  try {
    const { userId, jobId } = req.params;
    const deletedRows = await JobApplication.destroy({
      where: {
        usersCustomuserId: userId,
        JobId: jobId,
      },
    });

    if (deletedRows === 0) {
      return res
        .status(404)
        .json({ error: "Aplicación de empleo no encontrada." });
    }

    res
      .status(200)
      .json({ message: "Aplicación de empleo borrada exitosamente." });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = {
  createJobApplication,
  getJobApplicationsByUser,
  deleteJobApplicationByUserAndJob,
};
