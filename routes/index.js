const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));

// JWT middleware auth ______________________________
router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/template", require("./template"));
router.use("/", require("./redirect"));

module.exports = router;
