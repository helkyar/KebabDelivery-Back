const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function patchOrder(req, res) {
  
  const id = req.params;
  const data = req.body;
  //(!) Validation
  const order = await OrderManager.update(data, id);
  //(!) Universal manager -> model response
  order !== null
    ? res.status(200).json(data)
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = patchOrder;
