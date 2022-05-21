const router = require("express").Router();

router.patch(
  "/setactive/:id",
  require("../controllers/deliverer/patchActivateDeliverer")
);
router.patch(
  "/setcoordinates/:id",
  require("../controllers/deliverer/patchDelivererCoordinates")
);
router.get(
  "/orders/:id",
  require("../controllers/deliverer/getOrdersForDeliver")
);
router.get("/state/:id", require("../controllers/deliverer/getDelivererState"));
router.get(
  "/delivered/:id",
  require("../controllers/deliverer/getDeliveredOrders")
);
router.get("/users", require("../controllers/deliverer/getAllDeliverers"));

module.exports = router;
