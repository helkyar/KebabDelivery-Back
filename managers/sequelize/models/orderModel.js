const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Order = sequelize.define(
  "orders",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    estado: Sequelize.INTEGER, //1(procesing), 2(pick up), 3(delivering), 4(delivered)
    direccion_recogida: Sequelize.STRING,
    direccion_entrega: Sequelize.STRING,
    id_cliente: Sequelize.STRING,
    id_repartidor: Sequelize.STRING,
    dia_recogida: Sequelize.DATE,
    hora_recogida: Sequelize.DATE,
    hora_entrega: Sequelize.DATE,
    codigo_seguimiento: Sequelize.INTEGER,
    sign: {
      type: Sequelize.STRING,
      defaultValue: "false",
    },
  },
  {
    timestamps: false,
    modelName: "Order",
  }
);

module.exports = Order;
