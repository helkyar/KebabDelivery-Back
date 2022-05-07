const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");

async function getAllUsersByRol(req, res) {
  console.log("User controller getRol");
  const data = req.params;
  const user = await UserManager.findByValue(data);
  const RolManager = getModel(data.rol);
  const allInfo = user.map(async (userInfo) => {
    const rolInfo = await RolManager.findByValue({userid: userInfo.id});
    return { userInfo, rolInfo: rolInfo[0] };
  });
  user !== null
    ? res.status(200).json(allInfo)
    : res.status(400).json({ error: "bad request" });
}

module.exports = getAllUsersByRol;

// Option 1: search all users of specified rol and then specified info
// Option 2: joint search with sequelize
