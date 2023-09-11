const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define(
    "users_customuser",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      last_login: {
        type: DataTypes.DATE,
      },
      is_superuser: {
        type: DataTypes.BOOLEAN,
      },
      is_staff: {
        type: DataTypes.BOOLEAN,
      },
      date_joined: {
        type: DataTypes.DATE,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      first_name: {
        type: DataTypes.STRING,
      },
      last_name: {
        type: DataTypes.STRING,
      },
      phone_number: {
        type: DataTypes.STRING,
      },
      country: {
        type: DataTypes.STRING,
      },
      is_active: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User;
};
