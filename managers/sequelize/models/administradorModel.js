const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Administrador = sequelize.define(
  "administradores",
  {
    userid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
    modelName: "Administrador",
  }
);

module.exports = Administrador;
