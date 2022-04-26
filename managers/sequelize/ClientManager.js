/* const Manager = require("./Manager");
const Client = require("./models/clientModel");

module.exports = class ClientManager extends Manager {
  static async create(params) {
    return await this.executeQuery(Client, this.queries.insert, [params]);
  }
  static async findName({ username }) {
    const params = { where: { username } };
    return await this.executeQuery(User, this.queries.findName, [params]);
  }
};
 */