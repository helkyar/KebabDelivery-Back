const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../Manager").connect();

const User = sequelize.define(
  "users",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /[0-9]{3}[0-9]{3}[0-9]{3}/i,
      },
    },
    name: Sequelize.STRING,
    surname: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    rol: Sequelize.STRING,
  },
  {
    timestamps: false,
    modelName: "User",
  },
);

module.exports = User;
