const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);

async function patchDelivererCoordinates(req, res) {
  const id = req.params;
  const data = req.body;

  //(!) Validation
  const coordinates = await DelivererManager.updateCoordinates(data, {
    userid: id.id,
  });

  coordinates
    ? res.status(200).json(coordinates[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = patchDelivererCoordinates;
