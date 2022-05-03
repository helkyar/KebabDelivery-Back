const Manager = require("./Manager");
const Deliverer = require("./models/repartidorModel");

module.exports = class DelivererManager extends Manager {
  static async create({ userid, active, vehicle, coordinates }) {
    const params = [{ userid, active, vehicle, coordinates }];
    return await this.executeQuery(Deliverer, this.queries.insert, params);
  }
  static async delete({ id }) {    
    const params = { where: { id } };
    return await this.executeQuery(Deliverer, this.queries.delete, [params]);
  }
};
