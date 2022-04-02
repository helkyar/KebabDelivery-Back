const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function checkLoginController(req, res) {
  const token = jwt.sign(
    {
      id: req.body,
    },
    process.env.TOKEN_SECRET
  );

  res.status(200).json({ token });
}

module.exports = checkLoginController;
