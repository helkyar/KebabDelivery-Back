const Manager = require("./Manager");
const Order = require("./models/orderModel");

module.exports = class OrderManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Order, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Order, this.queries.find, [id]);
  }
  static async findByValue(value) {
    const params = { where: value };
    return await this.executeQuery(Order, this.queries.findAll, [params]);
  }

  static async findAvaiable({ id_delivered }) {
    // asociados a repartidor no completadas (state =< 3)
    // o sin id asignada, no empezados y fecha actual o anterior
    const params = {
      where: {
        $or: [
          { id_delivered, state: { $lte: 3 } },
          {
            id_delivered: null,
            state: 1,
            dia_recogida: { $lte: new Date() },
          },
        ],
      },
    };
    return await this.executeQuery(Order, this.queries.findAllOf, [params]);
  }
  static async findCompleted({ id_delivered }) {
    // asociados a repartidor no completadas (state =< 3)
    // o sin id asignada, no empezados y fecha actual o anterior
    const params = {
      where: {
        id_delivered,
        state: { $gt: 3 },
      },
    };
    return await this.executeQuery(Order, this.queries.findAllOf, [params]);
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
    { id }
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
