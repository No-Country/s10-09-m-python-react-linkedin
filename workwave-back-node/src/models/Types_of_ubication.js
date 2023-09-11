const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "types_of_ubication",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
