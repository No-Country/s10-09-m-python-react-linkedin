const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "JobApplication",
    {
      data_preference: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
