const router = require("express").Router();

router.get("/:url", require("../controllers/redirect/getRedirect"));

module.exports = router;
