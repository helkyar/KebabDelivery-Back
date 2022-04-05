const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function getTemplate(req, res) {
  console.log("Template controller get");
  const data = req.params;
  console.log(req.params);
  //(!) Validation
  const template = await TemplateManager.find(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template[0].getObject())
    : res.status(404).json({ error: "Doesn't exist" });
}

module.exports = getTemplate;
