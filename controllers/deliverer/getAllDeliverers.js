const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function getAllDeliverers(req, res) {
  
  // Correct version must be done using sequelize associations wich gave us problems in this proyect

  const deliverers = await DelivererManager.findAll();

  const profile = await UserManager.find({ id: deliverers[0].userid });

  deliverers[0].phone = profile[0].phone;
  deliverers[0].email = profile[0].email;

  deliverers
    ? res.status(200).json(deliverers)
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getAllDeliverers;
