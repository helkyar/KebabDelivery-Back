const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Client = sequelize.define(
  "clients",
  {
    userid: {
      type: Sequelize.UUID,
    },
  },
  {
    timestamps: false,
    modelName: "Client",
  },
);

module.exports = Client;
