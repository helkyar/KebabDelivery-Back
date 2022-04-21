const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Repartidor = sequelize.define(
  "Repartidores",
  {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    rol_id: Sequelize.INTEGER
  },
  {
    timestamps: false,
    modelName: "Repartidor"
  }
);

module.exports = Repartidor;
