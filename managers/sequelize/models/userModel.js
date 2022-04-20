const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Manager").connect();

const User = sequelize.define(
  "users",
  {
    id_user: Sequelize.INTEGER,
    nombre: Sequelize.STRING,
    username: Sequelize.STRING,
    correo: Sequelize.STRING,
    password: Sequelize.STRING,

  },
  {
    timestamps: false,
    modelName: "User"
  }
);

module.exports = User;
