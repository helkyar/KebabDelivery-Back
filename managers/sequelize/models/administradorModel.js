const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Administrador = sequelize.define(
  "administradores",
  {
    rol_id: Sequelize.INTEGER
  },
  {
    timestamps: false,
    modelName: "Administrador"
  }
);

module.exports = Administrador;
