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
    phone: {
      type:DataTypes.STRING,
      allowNull: true,
      validate:{
        is:/[0-9]{3}[0-9]{3}[0-9]{3}/i
      }
    },
    lastName: Sequelize.STRING,
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
