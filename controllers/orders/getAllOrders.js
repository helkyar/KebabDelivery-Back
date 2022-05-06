const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function getAllOrders(req, res) { 
  const orders = await OrderManager.findAll();
  orders !== null
    ? res.status(200).json(orders)
    : res.status(400).json({ error: "bad request" });
}

module.exports = getAllOrders;
