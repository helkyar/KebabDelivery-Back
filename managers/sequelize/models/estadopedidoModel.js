
const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const EstadoPedido = sequelize.define(
  "estadospedido",
  {
    id_estado: Sequelize.INTEGER,
    nombre_estado: Sequelize.STRING
  },
  {
    timestamps: false,
    modelName: "EstadoPedido"
  }
);

module.exports = EstadoPedido;
