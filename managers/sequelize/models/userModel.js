const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Manager").connect();

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre:  {
      type: Sequelize.STRING,
      allowNull: true
    },
    username:  {
      type: Sequelize.STRING,
      allowNull: true
    },
    correo:  {
      type: Sequelize.STRING,
      allowNull: true
    },
    password:  {
      type: Sequelize.STRING,
      allowNull: true
    },

  },
  {
    timestamps: false,
    modelName: "User"
  }
);

module.exports = User;
