const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function getAllTemplates(req, res) {
  console.log("Template controller getAll");
  const templates = await TemplateManager.findAll();

  res.status(200).json(templates.map((model) => model.getObject()));
}

module.exports = getAllTemplates;
