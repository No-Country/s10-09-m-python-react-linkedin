const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Define el modelo
  sequelize.define(
    "Comments", // Nombre del modelo (corregido a "Comments")
    {
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      date_comment: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW, // Establece la fecha actual como valor predeterminado
      },
    },
    {
      timestamps: false, // Desactiva la generación automática de campos createdAt y updatedAt
    }
  );
};
