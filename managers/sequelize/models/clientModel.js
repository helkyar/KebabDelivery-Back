const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Client = sequelize.define(
  "Clients",
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
    modelName: "Client"
  }
);

module.exports = Client;
