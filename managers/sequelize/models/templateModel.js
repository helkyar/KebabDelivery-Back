const Sequelize = require("sequelize");
const sequelize = require("../Manager").connect();

const Template = sequelize.define(
  // Name is automatically made plural by sequalize, why?
  "template",
  {
    column1: Sequelize.STRING,
    column2: Sequelize.STRING,
  },
  {
    timestamps: false,
  },
);

module.exports = Template;
