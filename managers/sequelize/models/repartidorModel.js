const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Repartidor = sequelize.define(
  "Repartidores",
  {
    rol_id: Sequelize.INTEGER
  },
  {
    timestamps: false,
    modelName: "Repartidores"
  }
);


// Repartidor.belongsTo(User);

module.exports = Repartidor;
