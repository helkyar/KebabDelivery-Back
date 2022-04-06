const Manager = require("./Manager");
const schema = require("./schemas/userSchema");

module.exports = class UserManager extends Manager {
  static async create({ user }) {
    return await this.executeQuery(schema, user, this.querys.save);
  }
  static async find({ user }) {
    return await this.executeQuery(schema, user, this.querys.find);
  }
};
