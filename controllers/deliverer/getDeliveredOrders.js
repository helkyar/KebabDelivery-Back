const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function getDelivererState(req, res) {
  const data = req.params;
  //(!) Validation

  const state = await OrderManager.findCompleted({ id_repartidor: data.id });

  state
    ? res.status(200).json(state[0])
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getDelivererState;
