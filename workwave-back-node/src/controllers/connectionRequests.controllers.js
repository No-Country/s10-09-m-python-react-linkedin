const { ConnectionRequests, Users_customuser } = require("../config/db");
const transporter = require("../config/mailer");
const { handleHttpError } = require("../utils/handleError");

const getConnections = async (req, res) => {
  try {
    const connections = await ConnectionRequests.findAll();

    res.status(200).json(connections);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { getConnections };

const createConnection = async (req, res) => {
  try {
    const { usersCustomuserId, receiverUserId, status } = req.body;

    const existingConnection = await ConnectionRequests.findOne({
      where: {
        receiverUserId,
      },
    });

    if (existingConnection) {
      return res.status(409).json({ error: "La conexión ya existe." });
    }

    const connectionRequest = await ConnectionRequests.create({
      usersCustomuserId,
      receiverUserId,
      status,
    });

    const receiverUser = await Users_customuser.findOne({
      where: {
        id: receiverUserId,
      },
    });

    if (!receiverUser) {
      return res
        .status(404)
        .json({ error: "Usuario destinatario no encontrado." });
    }

    const senderUser = await Users_customuser.findOne({
      where: {
        id: usersCustomuserId,
      },
    });

    if (!senderUser) {
      return res
        .status(404)
        .json({ error: "Usuario que envía la solicitud no encontrado." });
    }

    await transporter.sendMail({
      from: '"Workwave" <services.workwave@gmail.com>',
      to: receiverUser.email,
      subject: "Solicitud de conexión en Workwave",
      html: `
          <div style="background-color: #f5f5f5; padding: 20px;">
            <img src="URL_DEL_BANNER" alt="Workwave Banner" style="max-width: 100%; height: auto;" />
          </div>
          <div style="background-color: #ffffff; padding: 20px;">
            <p>Hola ${receiverUser.first_name},</p>
            <p>${senderUser.first_name} te ha enviado una solicitud de conexión en Workwave.</p>
            <p>Para aceptar la solicitud, haz clic en el siguiente botón:</p>
            <a href="URL_PARA_ACEPTAR" style="background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; display: inline-block; border-radius: 5px;">Aceptar</a>
            <p>Para rechazar la solicitud, haz clic en el siguiente botón:</p>
            <a href="URL_PARA_RECHAZAR" style="background-color: #dc3545; color: #ffffff; padding: 10px 20px; text-decoration: none; display: inline-block; border-radius: 5px;">Rechazar</a>
          </div>
        `,
    });

    res.status(201).json(connectionRequest);
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const updateConnection = async (req, res) => {
  try {
    const { id } = req.params;
    const { response } = req.body;

    const connectionRequest = await ConnectionRequests.findByPk(id);

    if (!connectionRequest) {
      return res
        .status(404)
        .json({ error: "Solicitud de conexión no encontrada." });
    }

    if (response === "aceptada") {
      await connectionRequest.update({ status: "aceptada" });
    } else if (response === "rechazada") {
      await connectionRequest.update({ status: "rechazada" });
    } else {
      return res.status(400).json({ error: "Respuesta no válida." });
    }

    res
      .status(200)
      .json({ message: "Estado de la solicitud actualizado correctamente." });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

const deleteConnection = async (req, res) => {
  try {
    const { id } = req.params;

    const connection = await ConnectionRequests.findOne({
      where: {
        id,
      },
    });

    if (!connection) {
      return res.status(404).json({ error: "Conexión no encontrada." });
    }

    await connection.destroy();

    res.status(200).json({ message: "Eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    handleHttpError(res, { error: error.message }, 500);
  }
};

module.exports = { deleteConnection };

module.exports = {
  createConnection,
  updateConnection,
  getConnections,
  deleteConnection,
};
