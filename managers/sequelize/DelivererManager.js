const Manager = require("./Manager");
const Deliverer = require("./models/repartidorModel");

module.exports = class DelivererManager extends Manager {
  static async create({ userid, active, vehicle, coordinates }) {
    const params = [{ userid, active, vehicle, coordinates }];
    return await this.executeQuery(Deliverer, this.queries.insert, params);
  }
  static async delete({ userid }) {    
    const params = { where: { userid } };
    return await this.executeQuery(Deliverer, this.queries.delete, [params]);
  }
  static async update({active, vehicle, coordinates}, { userid }) {
    const params = [{active, vehicle, coordinates}, { where: { userid } }];
    return await this.executeQuery(User, this.queries.update, params);
  }
};
