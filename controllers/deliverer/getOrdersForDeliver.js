const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function getOrdersForDeliver(req, res) {
  const { id } = req.params;

  // filter non asigned
  // filter not today or (previous not completed and not asigned)

  const orders = await OrderManager.findAvaiable({ id_repartidor: id });

  orders
    ? res.status(200).json(orders)
    : res.status(400).json({ error: "bad request" });
}

module.exports = getOrdersForDeliver;
