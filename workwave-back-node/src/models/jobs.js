const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Job", // Nombre del modelo
    {
      job_position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      ubication: {
        type: DataTypes.STRING,
        allowNull: true, // Puedes cambiar a false si la ubicación es siempre obligatoria
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: true, // Puedes cambiar a false si el salario es siempre obligatorio
      },
    },
    {
      timestamps: false, // Desactiva la generación automática de campos createdAt y updatedAt
    }
  );
};
