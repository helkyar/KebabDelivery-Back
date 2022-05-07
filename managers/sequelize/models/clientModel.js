const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Client = sequelize.define(
  "clients",
  {
    userid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
    modelName: "Client",
  }
);

module.exports = Client;
