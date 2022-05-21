const bcrypt = require("bcrypt");
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const ClientManager = require(`../../${process.env.MANAGER}/ClientManager`);

async function register(req, res) {
  let data = req.body;
  //(!) Validation
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  data.rol = "client";
  const user = await UserManager.create(data);
  let client;
  if (user !== null && user[0].id) {
    const userid = user[0].id;
    client = await ClientManager.create({ userid });
  }
  //(!) Universal manager -> model response
  user && client
    ? res.status(200).json(user[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = register;
