
const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Pedido = sequelize.define(
  "pedidos",
  {
    id_pedido: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_estado: Sequelize.INTEGER,
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
    modelName: "Pedido"
  }
);

module.exports = Pedido;
