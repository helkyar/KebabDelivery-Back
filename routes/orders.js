const router = require("express").Router();

router.get("/all", require("../controllers/orders/getAllOrders"));
router.get("/id/:id", require("../controllers/orders/getOrder"));
router.post("/add", require("../controllers/orders/postOrder"));
router.patch("/update/:id", require("../controllers/orders/patchOrder"));
router.delete("/delete/:id", require("../controllers/orders/delOrder"));

module.exports = router;
