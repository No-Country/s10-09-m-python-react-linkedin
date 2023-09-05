const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Define el modelo
  const User = sequelize.define(
    "users_customuser", // Nombre del modelo, debe coincidir con el nombre de la tabla en la base de datos
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
      timestamps: false, // Desactiva la generación automática de campos createdAt y updatedAt
      freezeTableName: true, // Evita que Sequelize cree una nueva tabla y utiliza la tabla existente
    }
  );

  return User;
};
