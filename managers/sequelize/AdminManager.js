const Manager = require("./Manager");
const Admin = require("./models/administradorModel");

module.exports = class AdminManager extends Manager {
  static async create({ userid }) {
    return await this.executeQuery(Admin, this.queries.insert, [{ userid }]);
  }
  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Admin, this.queries.delete, [params]);
  }
  static async update(data, { userid }) {
    const params = [{ userid }, { where: { userid }, returning: true }];
    return await this.executeQuery(Admin, this.queries.update, params);
  }
  static async findByValue(value) {
    const params = { where: value };
    return await this.executeQuery(Admin, this.queries.findName, [params]);
  }
};
