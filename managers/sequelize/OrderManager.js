const Manager = require("./Manager");
const Order = require("./models/orderModel");

module.exports = class OrderManager extends Manager {
  static async findAll() {
    return await this.executeQuery(Order, this.queries.findAll);
  }

  static async find({ id }) {
    return await this.executeQuery(Order, this.queries.find, [id]);
  }

  static async findAvaiable({ id_repartidor }) {
    // asociados a repartidor no completadas (estado =< 3)
    // o sin id asignada, no empezados y fecha actual o anterior
    const params = {
      where: {
        $or: [
          { id_repartidor, estado: { $lte: 3 } },
          {
            id_repartidor: null,
            estado: 1,
            dia_recogida: { $lte: new Date() },
          },
        ],
      },
    };
    return await this.executeQuery(Order, this.queries.findAllOf, [params]);
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
      hora_entrega,
    },
    { id }
  ) {
    const params = [
      {
        estado,
        direccion_recogida,
        direccion_entrega,
        id_repartidor,
        hora_recogida,
        hora_entrega,
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
