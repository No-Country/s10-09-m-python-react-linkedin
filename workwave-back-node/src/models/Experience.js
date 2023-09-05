const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Define el modelo
  sequelize.define(
    "Experience", // Nombre del modelo
    {
      job_position: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      ubication: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sector: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT, // Cambiado a tipo TEXT
        allowNull: true,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: false, // Desactiva la generación automática de campos createdAt y updatedAt
    }
  );
};
