const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function patchUser(req, res) {  
  const id = req.params;
  const data = req.body;
  
  //(!) Validation
  const user = await UserManager.update(data, id);
  let rolInfo;
  if(user && user[0].rol){
    const RolManager = getModel(user[0].rol);
   rolInfo = await RolManager.update(data)
  }
  //(!) Universal manager -> model response
  user !== null
    ? res.status(200).json({ user: user[0], rolInfo: rolInfo[0] })
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = patchUser;
