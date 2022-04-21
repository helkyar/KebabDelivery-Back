const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Administrador = sequelize.define(
  "administradores",
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
    modelName: "Administrador"
  }
);

module.exports = Administrador;
