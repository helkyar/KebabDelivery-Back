const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function getOrder(req, res) {  
  const data = req.params;
  console.log(req.params);
  //(!) Validation
  const order = await OrderManager.find(data);
  //(!) Universal manager -> model response
  order !== null
    ? res.status(200).json(order[0])
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getOrder;
