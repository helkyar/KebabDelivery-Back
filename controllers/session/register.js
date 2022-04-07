const bcrypt = require("bcrypt");
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function register(req, res) {
  console.log("Register controller");
  let data = req.body;
  //(!) Validation
  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);
  const user = await UserManager.create(data);
  //(!) Universal manager -> model response
  user !== null
    ? res.status(200).json(user[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = register;
