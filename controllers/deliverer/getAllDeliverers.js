const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function getAllDeliverers(req, res) {
  const deliverers = await DelivererManager.findAll();

  deliverers.map(async (deliverer) => {
    console.log("DELIVERES ALL", deliverer);
    if (!deliverer) return deliverer;
    const profile = await UserManager.find({ id: deliverer.userid });

    deliverer.phone = profile[0].phone;
    deliverer.email = profile[0].email;
    return deliverer;
  });

  deliverers
    ? res.status(200).json(deliverers)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getAllDeliverers;
