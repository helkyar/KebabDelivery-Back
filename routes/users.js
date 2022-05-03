const router = require("express").Router();

router.get("/all", require("../controllers/users/getAllUsers"));
router.get("/all/:rol", require("../controllers/users/getAllUsersByRol"));
router.get("/id/:id", require("../controllers/users/getUser"));
router.post("/add", require("../controllers/users/postUser"));
router.patch("/update/:id", require("../controllers/users/patchUser"));
router.delete("/delete/:id", require("../controllers/users/delUser"));

module.exports = router;
