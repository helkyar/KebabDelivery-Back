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
  static async update({}, { userid }) {
    const params = [{}, { where: { userid } }];
    return await this.executeQuery(User, this.queries.update, params);
  }
};
