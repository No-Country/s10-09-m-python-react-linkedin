const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Post",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      post_date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      video: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
    }
  );
};
