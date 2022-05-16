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
router.post("/img", require("../controllers/deliverer/postImg"));

router.get("/all", require("../controllers/template/getAllTemplates"));
router.post("/add", require("../controllers/template/postTemplate"));
router.delete("/delete/:id", require("../controllers/template/delTemplate"));

module.exports = router;
