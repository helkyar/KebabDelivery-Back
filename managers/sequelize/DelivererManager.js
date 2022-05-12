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
  static async update({ active, pakage, coordinates }, { userid }) {
    const params = [
      { active, pakage, coordinates },
      { where: { userid }, returning: true },
    ];
    return await this.executeQuery(User, this.queries.update, params);
  }
  static async findByValue(value) {
    const params = { where: value };
    return await this.executeQuery(Deliverer, this.queries.findName, [params]);
  }
};
