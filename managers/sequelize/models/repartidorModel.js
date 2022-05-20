const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Repartidor = sequelize.define(
  "repartidores",
  {
    userid: {
      type: Sequelize.UUID,
    },
    latitude: Sequelize.FLOAT,
    longitude: Sequelize.FLOAT,
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    pakage: Sequelize.UUID,
  },
  {
    timestamps: false,
    modelName: "deliverer",
  }
);

module.exports = Repartidor;
