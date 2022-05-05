const OrderManager = require(`../../${process.env.MANAGER}/orderManager`);

async function delOrder(req, res) { 
  const data = req.params;
  //(!) Validation
  const order = OrderManager.delete(data);
  //(!) Universal manager -> model response
  order !== null
    ? res.status(200).json({ success: "Entry deleted" })
    : res.status(404).json({ error: "Try again" });
}

module.exports = delOrder;
