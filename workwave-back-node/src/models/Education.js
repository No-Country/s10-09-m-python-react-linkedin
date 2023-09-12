const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Education",
    {
      educational_institution: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      degree: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      academic_discipline: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      activities_and_groups: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
