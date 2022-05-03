const Manager = require("./Manager");
const Client = require("./models/clientModel");

module.exports = class ClientManager extends Manager {
  static async create({ userid }) {
    return await this.executeQuery(Client, this.queries.insert, [{ userid }]);
  }
};
