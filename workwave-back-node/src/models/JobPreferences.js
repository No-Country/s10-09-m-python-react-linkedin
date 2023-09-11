const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "JobPreferences",
    {
      data_preference: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      timestamps: false,
    }
  );
};
