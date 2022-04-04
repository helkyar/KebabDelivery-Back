//const UrlManager = require("../managers/UrlManager");
async function getRedirect(req, res) {
  const { url } = req.params;
  //check url in database
  //const location = await UrlManager.find(url);
  const location = "https://trello.com/b/me2r98Ij/url-shorter";
  //redirect
  location
    ? res.writeHead(301, { location }).send()
    : res.status(200).json({ url });
}
module.exports = getRedirect;
