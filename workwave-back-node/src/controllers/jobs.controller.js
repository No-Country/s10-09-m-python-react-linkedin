const {
  Job,
  Users_customuser,
  Types_of_ubication,
  Types_of_employment,
} = require("../config/db");
const { handleHttpError } = require("../utils/handleError");
const getTotalJobs = async (req, res) => {
  try {
    const totalJobs = await Job.findAll({
      include: [
        { model: Users_customuser },
        { model: Types_of_ubication },
        { model: Types_of_employment },
      ],
      attributes: {
        exclude: [
          "typesOfEmploymentId",
          "typesOfUbicationId",
          "usersCustomuserId",
        ],
      },
    });
    res.status(200).json(totalJobs);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findByPk(jobId, {
      include: [
        { model: Users_customuser },
        { model: Types_of_ubication },
        { model: Types_of_employment },
      ],
      attributes: {
        exclude: [
          "typesOfEmploymentId",
          "typesOfUbicationId",
          "usersCustomuserId",
        ],
      },
    });

    if (!job) {
      return res
        .status(404)
        .json({ error: "Publicacion de empleo  no encontrado." });
    }

    res.status(200).json(job);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};
const createJobs = async (req, res) => {
  try {
    const {
      job_position,
      company_name,
      description,
      ubication,
      salary,
      typesOfEmploymentId,
      typesOfUbicationId,
      usersCustomuserId,
    } = req.body;

    const job = await Job.create({
      job_position,
      company_name,
      description,
      ubication,
      salary,
      typesOfEmploymentId,
      typesOfUbicationId,
      usersCustomuserId,
    });

    res.status(201).json(job);
  } catch (error) {
    console.log(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};
const updateJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const updatedJobData = req.body;
    const [updatedRows, updatedJobs] = await Job.update(updatedJobData, {
      where: { id: jobId },
      returning: true,
    });

    if (updatedRows === 0) {
      return res.status(404).json({ error: "Empleo no encontrado." });
    }

    res.status(200).json(updatedJobs[0]);
  } catch (error) {
    console.log(error);
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.id;
    const deletedRows = await Job.destroy({
      where: { id: jobId },
    });

    if (deletedRows === 0) {
      return res.status(404).json({ error: "Empleo no encontrado." });
    }

    res.status(200).json({ message: "Empleo eliminado exitosamente." });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { createJobs, getTotalJobs, getJobById, updateJob, deleteJob };
