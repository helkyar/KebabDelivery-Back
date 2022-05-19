const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");
async function patchUser(req, res) {
  const id = req.params;
  const data = req.body;

  //(!) Validation
  const user = await UserManager.update(data, id);
  let rolInfo;
  if (user && user[0].rol) {
    const RolManager = await getModel(user[0].rol);
    if (RolManager) {
      console.log(RolManager, "ROLMANAGER");
      rolInfo = await RolManager.update(data, { userid: id.id });
    }
  }
  //(!) Universal manager -> model response
  console.log(rolInfo, "ROLFINO AT CONTROLLER");
  user && rolInfo
    ? res.status(200).json({ user: user[0], rolInfo: rolInfo[0] })
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = patchUser;
