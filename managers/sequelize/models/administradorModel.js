const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Administrador = sequelize.define(
  "administradores",
  {
    userid: {
      type: Sequelize.UUID,
    },
  },
  {
    timestamps: false,
    modelName: "Administrador",
  },
);

module.exports = Administrador;
