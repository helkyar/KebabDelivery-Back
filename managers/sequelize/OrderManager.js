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
      state,
      from,
      to,
      id_client,
      id_delivered,
      pick_up_date,
      pick_up_time,
      delivered_time,
      tracking_code,
      pakage,
      letter,
      comment,
    },
    { id },
  ) {
    const params = [
      {
        state,
        from,
        to,
        id_client,
        id_delivered,
        pick_up_date,
        pick_up_time,
        delivered_time,
        tracking_code,
        pakage,
        letter,
        comment,
      },
      { where: { id }, returning: true },
    ];
    return await this.executeQuery(Order, this.queries.update, params);
  }

  static async delete({ id }) {
    const params = { where: { id } };
    return await this.executeQuery(Order, this.queries.delete, [params]);
  }
};
