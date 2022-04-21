const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Rol = sequelize.define(
  "roles",
  {
    id_rol: Sequelize.INTEGER,
    nombre_rol: Sequelize.STRING
  },
  {
    timestamps: false,
    modelName: "Rol"
  }
);

module.exports = Rol;
