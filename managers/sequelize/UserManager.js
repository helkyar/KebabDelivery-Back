const Manager = require("./Manager");
const User = require("./models/userModel");

module.exports = class UserManager extends Manager {
  static async create({ name, surname, phone, email, password, rol }) {
    const params = [{ name, surname, phone, email, password, rol }];
    return await this.executeQuery(User, this.queries.insert, params);
  }
  static async findByValue(value) {
    const params = { where: value };
    return await this.executeQuery(User, this.queries.findName, [params]);
  }
  static async findByRol({ rol }) {
    const params = { where: { rol } };
    return await this.executeQuery(User, this.queries.findName, [params]);
  }
  static async delete({ id }) {    
    const params = { where: { id } };
    return await this.executeQuery(User, this.queries.delete, [params]);
  }
  static async update({ name, surname, phone, email, password, rol}, { id }) {
    const params = [{ name, surname, phone, email, password, rol }, { where: { id } }];
    return await this.executeQuery(User, this.queries.update, params);
  }
};
