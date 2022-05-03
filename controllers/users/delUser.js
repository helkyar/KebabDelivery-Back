const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");

async function delUser(req, res) {
  console.log("User controller del");
  const data = req.params;
  //(!) Validation
  const user = await UserManager.delete(data);
  if(user && user[0].rol){
    const RolManager = getModel(user[0].rol);
    await RolManager.delete(data)
  }

  //(!) Universal manager -> model response 
  user !== null
    ? res.status(200).json({ success: "Entry deleted" })
    : res.status(404).json({ error: "Try again" });
}

module.exports = delUser;
