const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));

// JWT middleware auth ______________________________
router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/template", require("./template"));
router.use("/users", require("./users"));
router.use("/orders", require("./orders"));
router.use("/deliverer", require("./deliverer"));

module.exports = router;
