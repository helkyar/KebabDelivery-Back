const Manager = require("./Manager");
const User = require("./models/userModel");

module.exports = class UserManager extends Manager {
  static async create({ name, surname, phone, email, password, rol }) {
    const params = [{ name, surname, phone, email, password, rol }];
    return await this.executeQuery(User, this.queries.insert, params);
  }
  static async findName({ email }) {
    const params = { where: { email } };
    return await this.executeQuery(User, this.queries.findName, [params]);
  }
  static async delete({ id }) {    
    const params = { where: { id } };
    return await this.executeQuery(User, this.queries.delete, [params]);
  }
};
