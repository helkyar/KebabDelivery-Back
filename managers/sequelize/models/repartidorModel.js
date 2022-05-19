const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Repartidor = sequelize.define(
  "Repartidores",
  {
    userid: {
      type: Sequelize.UUID,
    },
    coordinates: Sequelize.STRING,
    active: {
      type: Sequelize.BOOLEAN,
      defaultValue: false,
    },
    package: Sequelize.INTEGER,
  },
  {
    timestamps: false,
    modelName: "Repartidor",
  },
);

module.exports = Repartidor;
