const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Conversation",
    {
      members: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: true,
    }
  );
};
