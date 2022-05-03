const UserManager = require(`../../${process.env.MANAGER}/UserManager`);
const getModel = require("./getModelManager");

async function getAllTemplates(req, res) {
  console.log("Template controller getAll");
  const templates = await TemplateManager.findAll();
  templates !== null
    ? res.status(200).json(templates)
    : res.status(400).json({ error: "bad request" });
}

module.exports = getAllTemplates;
