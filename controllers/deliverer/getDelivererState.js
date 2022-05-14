const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);

async function getDelivererState(req, res) {
  const data = req.params;
  //(!) Validation

  const state = await DelivererManager.findByValue({ userid: data.id });

  state
    ? res.status(200).json(state[0])
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getDelivererState;
