const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Manager").connect();

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    rol: Sequelize.STRING,
  },
  {
    timestamps: false,
    modelName: "User",
  }
);

module.exports = User;
