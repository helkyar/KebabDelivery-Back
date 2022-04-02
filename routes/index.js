const router = require("express").Router();

router.use("/login", require("./login"));

module.exports = router;
