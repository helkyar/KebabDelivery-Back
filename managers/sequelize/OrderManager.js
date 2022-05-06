const Manager = require("./Manager");
const Order = require("./models/orderModel");

module.exports = class OrderManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Order, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Order, this.queries.find, [id]);
  }

  static async create(params) {
    return await this.executeQuery(Order, this.queries.insert, [params]);
  }

  static async update(
    {
      estado,
      direccion_recogida,
      direccion_entrega,
      id_repartidor,
      hora_recogida,
      hora_entrega
    },
    { id }
  ) {
    const params = [{
      estado,
      direccion_recogida,
      direccion_entrega,
      id_repartidor,
      hora_recogida,
      hora_entrega }, { where: { id } }];
    return await this.executeQuery(Order, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Order, this.queries.delete, [params]);
  }
};
