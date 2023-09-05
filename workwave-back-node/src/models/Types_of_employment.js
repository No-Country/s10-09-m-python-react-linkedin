const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Define el modelo
  sequelize.define(
    "types_of_employment", // Nombre del modelo
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false, // Desactiva la generación automática de campos createdAt y updatedAt
    }
  );
};
