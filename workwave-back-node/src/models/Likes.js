const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Likes",
    {
      // quantity: {
      //   type: DataTypes.INTEGER,
      //   allowNull: false,
      //   defaultValue: 0, // Puedes establecer un valor predeterminado
      // },
    },
    {
      timestamps: false,
    }
  );
};
