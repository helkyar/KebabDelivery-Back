const Manager = require("./Manager");
const Deliverer = require("./models/repartidorModel");

module.exports = class DelivererManager extends Manager {
  static async create({ userid }) {
    const params = [{ userid }];
    return await this.executeQuery(Deliverer, this.queries.insert, params);
  }
  static async delete({ userid }) {
    const params = { where: { userid } };
    return await this.executeQuery(Deliverer, this.queries.delete, [params]);
  }
  static async updateActive({ active }, { userid }) {
    const params = [{ active }, { where: { userid }, returning: true }];
    return await this.executeQuery(Deliverer, this.queries.update, params);
  }
  static async updatePackage({ pakage }, { userid }) {
    const params = [{ pakage }, { where: { userid }, returning: true }];
    return await this.executeQuery(Deliverer, this.queries.update, params);
  }
  static async updateCoordinates({ longitude, latitude }, { userid }) {
    console.log(latitude, longitude, userid, "$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    const params = [
      { longitude, latitude },
      { where: { userid }, returning: true },
    ];
    return await this.executeQuery(Deliverer, this.queries.update, params);
  }
  static async findByValue(value) {
    const params = { where: value };
    return await this.executeQuery(Deliverer, this.queries.findName, [params]);
  }
};
