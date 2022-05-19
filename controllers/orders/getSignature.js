const fs = require("fs");

async function getSignature(req, res) {
  const data = req.params;
  console.log("HERE BITCH");
  // Setting the headers
  res.writeHead(200, {
    "Content-Type": "image/png",
  });

  // Reading the file
  fs.readFile(`/static/${data.id}.png`, function (err, content) {
    // Serving the image
    res.end(content);
  });
}

module.exports = getSignature;
