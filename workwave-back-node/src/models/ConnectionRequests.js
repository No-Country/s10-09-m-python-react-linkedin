const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("ConnectionRequests", {
    receiverUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("pendiente", "aceptada", "rechazada"),
      allowNull: false,
      defaultValue: "pendiente",
    },
  });
};
