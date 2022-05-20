const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function postOrder(req, res) {
  const data = req.body;
  //(!) Validation

  const order = await OrderManager.create(data);
  console.log(order, "post order");
  //(!) Universal manager -> model response
  order !== null
    ? res.status(200).json(order[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postOrder;
