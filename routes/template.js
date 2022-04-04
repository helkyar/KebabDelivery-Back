const router = require("express").Router();

router.get("/all", require("../controllers/template/getAllTemplates"));
router.get("/id/:id", require("../controllers/template/getTemplate"));
router.post("/add", require("../controllers/template/postTemplate"));
router.patch("/update/:id", require("../controllers/template/patchTemplate"));
router.delete("/delete/:id", require("../controllers/template/delTemplate"));

module.exports = router;
