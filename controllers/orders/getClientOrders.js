const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function getClientOrders(req, res) {
  const data = req.params;
  const orders = await OrderManager.findByValue({ id_client: data.id });
  console.log(orders);
  orders !== null
    ? res.status(200).json(orders)
    : res.status(400).json({ error: "bad request" });
}

module.exports = getClientOrders;
