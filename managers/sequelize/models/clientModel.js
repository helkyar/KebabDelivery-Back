const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Client = sequelize.define(
  "Clients",
  {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: Sequelize.STRING,
  },
  {
    timestamps: false,
    modelName: "Client",
  }
);

module.exports = Client;
