
const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const EstadoPedido = sequelize.define(
  "estadospedido",
  {
    id_estado: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre_estado: Sequelize.STRING
  },
  {
    timestamps: false,
    modelName: "EstadoPedido"
  }
);

module.exports = EstadoPedido;
