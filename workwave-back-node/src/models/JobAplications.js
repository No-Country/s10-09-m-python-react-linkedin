const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "JobApplication",
    {
      cv: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      resume: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      reason_for_interest: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
