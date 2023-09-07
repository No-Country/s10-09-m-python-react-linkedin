const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

// const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/workwave`,
//   {
//     logging: false, // set to console.log to see the raw SQL queries
//     native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//   }
// );
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST, DB_PORT } = process.env;
// Crea una instancia de Sequelize para conectarte a la base de datos
console.log(DB_NAME);
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: "postgres", // Especifica el dialecto de la base de datos
  logging: false, // Desactiva el registro de consultas SQL en la consola (puedes habilitarlo si lo deseas)
});
const basename = path.basename(__filename);
console.log(basename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "../models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "../models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);

sequelize.models = Object.fromEntries(capsEntries);
console.log(sequelize.models);

const {
  Experience,
  Types_of_employment,
  Types_of_ubication,
  Users_customuser,
  Post,
  Likes,
  Comments,
  ConnectionRequests,
} = sequelize.models;

Users_customuser.hasOne(ConnectionRequests);
ConnectionRequests.belongsTo(Users_customuser);

Types_of_employment.hasOne(Experience);
Experience.belongsTo(Types_of_employment);

Types_of_ubication.hasOne(Experience);
Experience.belongsTo(Types_of_ubication);

Users_customuser.hasMany(Experience);
Experience.belongsTo(Users_customuser);

Users_customuser.hasMany(Post);
Post.belongsTo(Users_customuser);

Users_customuser.hasMany(Likes);
Likes.belongsTo(Users_customuser);

Post.hasMany(Likes);
Likes.belongsTo(Post);

Users_customuser.hasMany(Comments);
Comments.belongsTo(Users_customuser);

Post.hasMany(Comments);
Comments.belongsTo(Post);

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
