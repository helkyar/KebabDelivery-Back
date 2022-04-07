const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function delTemplate(req, res) {
  console.log("Template controller del");
  const data = req.params;
  //(!) Validation
  const template = TemplateManager.delete(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json({ success: "Entry deleted" })
    : res.status(404).json({ error: "Try again" });
}

module.exports = delTemplate;
