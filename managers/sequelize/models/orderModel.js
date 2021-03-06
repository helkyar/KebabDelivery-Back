const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Order = sequelize.define(
  "orders",
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    state: {
      type: Sequelize.STRING,
      defaultValue: "0",
    },
    from: Sequelize.STRING,
    to: Sequelize.STRING,
    id_client: Sequelize.STRING,
    id_delivered: Sequelize.STRING,
    pick_up_date: Sequelize.DATEONLY,
    delivered_time: Sequelize.STRING,
    pakage: Sequelize.STRING,
    letter: Sequelize.STRING,
    comment: Sequelize.STRING,
  },
  {
    timestamps: false,
    modelName: "Order",
  }
);

module.exports = Order;
