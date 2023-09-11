const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "types_of_employment",
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
