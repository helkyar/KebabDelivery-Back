const ClientManager = require(`../../${process.env.MANAGER}/ClientManager`);
const AdminManager = require(`../../${process.env.MANAGER}/AdminManager`);
const DelivererManager = require(`../../${process.env.MANAGER}/DelivererManager`);

async function getModel(rol) {
  if (rol == "admin") {
    return AdminManager;
  } else if (rol == "client") {
    return ClientManager;
  } else if (rol == "deliverer") {
    return DelivererManager;
  }
  return null;
}

module.exports = getModel;
