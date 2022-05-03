const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function getAllTemplates(req, res) {
  console.log("Template controller getAll");
  const templates = await TemplateManager.findAll();
  templates !== null
    ? res.status(200).json(templates)
    : res.status(400).json({ error: "bad request" });
}

module.exports = getAllTemplates;
