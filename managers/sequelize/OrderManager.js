const Manager = require("./Manager");
const Order = require("./models/orderModel");

module.exports = class OrderManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Order, this.queries.findAll);
  }

  static async find({ id_orders }) {
    return await this.executeQuery(Order, this.queries.find, [id_orders]);
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
    { id_orders }
  ) {
    const params = [{
      estado,
      direccion_recogida,
      direccion_entrega,
      id_repartidor,
      hora_recogida,
      hora_entrega }, { where: { id_orders } }];
    return await this.executeQuery(Order, this.queries.update, params);
  }

  static async delete({ id_orders }) {
    const params = { where: { id_orders } };
    return await this.executeQuery(Order, this.queries.delete, [params]);
  }
};
