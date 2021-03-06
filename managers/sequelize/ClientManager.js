const Manager = require("./Manager");
const Client = require("./models/clientModel");

module.exports = class ClientManager extends Manager {
  static async create({ userid }) {
    return await this.executeQuery(Client, this.queries.insert, [{ userid }]);
  }
  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Client, this.queries.delete, [params]);
  }
  static async update(data, { userid }) {
    console.log(userid, "USERID ID");
    const params = [{ userid }, { where: { userid }, returning: true }];
    return await this.executeQuery(Client, this.queries.update, params);
  }
  static async findByValue(value) {
    const params = { where: value };
    return await this.executeQuery(Client, this.queries.findName, [params]);
  }
};
