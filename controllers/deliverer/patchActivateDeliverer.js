const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);

async function patchActivateDeliverer(req, res) {
  const id = req.params;
  const data = req.body;
  //(!) Validation
  const state = await DelivererManager.updateActive(data, {
    userid: id.id,
  });

  state
    ? res.status(200).json(state[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = patchActivateDeliverer;
