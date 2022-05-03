const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");

async function delUser(req, res) {  
  const data = req.params;
  //(!) Validation
  const user = await UserManager.delete(data);
  if(user && user[0].rol){
    const RolManager = getModel(user[0].rol);
    await RolManager.delete({userid: data.id})
  }

  //(!) Universal manager -> model response 
  user !== null
    ? res.status(200).json({ success: "Entry deleted" })
    : res.status(404).json({ error: "Try again" });
}

module.exports = delUser;
