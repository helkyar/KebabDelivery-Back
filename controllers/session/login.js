const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserManager = require(`../../${process.env.MANAGER}/UserManager`);

async function checkLogin(req, res) {
  console.log("Login controller");
  const credentials = req.body;
  console.log(req.body);
  // Incorrect login___________________________________
  if (!credentials) {
    res.status(400).json({ error: "nice try" });
  }

  // Search user_______________________________________
  const user = await UserManager.findName(credentials);
  if (!user && !user[0]) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  // Cehck password____________________________________
  const { username, id, password } = user[0].getObject();
  const validPassword = await bcrypt.compare(credentials?.password, password);
  if (!validPassword) {
    return res.status(400).json({ error: "credenciales incorrectas" });
  }

  // Create token________________________________________
  const token = jwt.sign({ id, username }, process.env.TOKEN_SECRET);
  res.status(200).json({ token, username, id });
}

module.exports = checkLogin;
