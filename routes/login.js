const router = require("express").Router();

router.post("/login", require("../controllers/session/login"));
router.post("/register", require("../controllers/session/register"));

module.exports = router;
