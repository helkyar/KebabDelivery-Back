const fs = require("fs");
const OrderManager = require(`../../${process.env.MANAGER}/OrderManager`);

async function patchOrder(req, res) {
  const id = req.params;
  const data = req.body;

  if (data.sign) {
    const regex = /^data:.+\/(.+);base64,(.*)$/;

    const matches = data.sign.match(regex);
    const ext = matches[1];
    const code = matches[2];
    const buffer = Buffer.from(code, "base64");

    fs.writeFileSync(`static/${data.id}.${ext}`, buffer);
    data.sign = true;
  }
  //(!) Validation
  const order = await OrderManager.update(data, id);

  order !== null
    ? res.status(200).json(order)
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = patchOrder;
