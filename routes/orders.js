const router = require("express").Router();

router.get("/all", require("../controllers/orders/getAllOrders"));
router.get("/id/:id", require("../controllers/orders/getOrder"));
router.get("/sign/:id", require("../controllers/orders/getSignature"));
router.get("/coordinates/:id", require("../controllers/orders/getCoordinates"));
router.post("/add", require("../controllers/orders/postOrder"));
router.patch("/update/:id", require("../controllers/orders/patchOrder"));
router.delete("/delete/:id", require("../controllers/orders/delOrder"));
router.get("/client/:id", require("../controllers/orders/getClientOrders"));

module.exports = router;
