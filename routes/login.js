const router = require("express").Router();

router.post("/login", require("../controllers/checkLogin"));
//comment
module.exports = router;
