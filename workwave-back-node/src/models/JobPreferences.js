const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "JobPreferences",
    {
      data_preference: {
        type: DataTypes.DATE, // Usamos DataTypes.DATE para capturar la fecha y hora
        allowNull: false,
        defaultValue: DataTypes.NOW, // Establece el valor predeterminado como la fecha y hora actual
      },
    },
    {
      timestamps: false,
    }
  );
};
