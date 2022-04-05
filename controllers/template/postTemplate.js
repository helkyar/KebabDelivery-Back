const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function postTemplate(req, res) {
  console.log("Template controller post");
  const data = req.body;
  //(!) Validation
  const template = await TemplateManager.create(data);
  //(!) Universal manager -> model response
  console.log(template[0].getObject());
  template !== null
    ? res.status(200).json(template[0].getObject())
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postTemplate;
