const router = require("express").Router();

// Session __________________________________________
router.use("/session", require("./login"));
router.use("/orders", require("./orders"));

// JWT middleware auth ______________________________
router.use(require("../middlewares/token"));

// Other routes _____________________________________
router.use("/users", require("./users"));
router.use("/deliverer", require("./deliverer"));

module.exports = router;
