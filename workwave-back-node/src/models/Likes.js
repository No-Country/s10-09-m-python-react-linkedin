const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Define el modelo
  sequelize.define(
    "Likes", // Nombre del modelo
    {
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0, // Puedes establecer un valor predeterminado
      },
    },
    {
      timestamps: false, // Desactiva la generación automática de campos createdAt y updatedAt
    }
  );
};
