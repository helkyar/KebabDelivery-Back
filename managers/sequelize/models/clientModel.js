const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Client = sequelize.define(
  "Clients",
  {
    rol_id: Sequelize.STRING
  },
  {
    timestamps: false,
  }
);


// Client.belongsTo(User);

module.exports = Client;
