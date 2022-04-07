const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function patchTemplate(req, res) {
  console.log("Template controller patch");
  const id = req.params;
  const data = req.body;
  //(!) Validation
  const template = await TemplateManager.update(data, id);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template[0])
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = patchTemplate;
