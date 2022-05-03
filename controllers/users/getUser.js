const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");

async function getUser(req, res) {
  console.log("User controller get");
  const data = req.params;
  //(!) Validation
  const user = await UserManager.find(data);

  let rolInfo;
  const RolManager = getModel(user[0].rol);
  if (RolManager) {
    rolInfo = await RolManager.find({ userid: data.id });
  }
  //(!) Universal manager -> model response
  user && rolInfo
    ? res.status(200).json({ user: user[0], rolInfo: rolInfo[0] })
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getUser;
