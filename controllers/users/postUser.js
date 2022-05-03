const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");

async function postUser(req, res) {
  console.log("Template controller post");
  let data = req.body;
  const user = await UserManager.create(data);

  const RolManager = getModel(data.rol);

  if (RolManager && user[0].id) {
    data.userid = user[0].id;
    await RolManager.create(data);
  }

  //(!) Universal manager -> model response
  user !== null
    ? res.status(200).json(user[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postUser;
