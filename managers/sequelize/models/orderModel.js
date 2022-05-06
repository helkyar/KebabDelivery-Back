
const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Order = sequelize.define(
  "orders",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    estado: Sequelize.STRING,
    direccion_recogida: Sequelize.STRING,
    direccion_entrega: Sequelize.STRING,
    id_cliente: Sequelize.STRING,
    id_repartidor: Sequelize.STRING,
    hora_recogida: Sequelize.DATE,
    hora_entrega: Sequelize.DATE,
    codigo_seguimiento: Sequelize.INTEGER

  },
  {
    timestamps: false,
    modelName: "Order"
  }
);

module.exports = Order;
