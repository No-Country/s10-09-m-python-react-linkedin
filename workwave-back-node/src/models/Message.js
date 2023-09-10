const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Message",
    {
      text: {
        type: DataTypes.TEXT,
      },
    },
    {
      timestamps: true,
    }
  );
};
