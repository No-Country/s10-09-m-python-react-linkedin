const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Skill",
    {
      skill_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};
