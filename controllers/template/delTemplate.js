const TemplateManager = require(`../../${process.env.MANAGER}/TemplateManager`);

async function delTemplate(req, res) {
  console.log("Course controller del");
  const data = req.body;
  //(!) Validation
  const template = TemplateManager.delete(data);
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json({ success: "Entry deleted" })
    : res.status(404).json({ error: "Try again" });
}

module.exports = delTemplate;
