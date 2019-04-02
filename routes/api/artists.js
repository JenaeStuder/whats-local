const router = require("express").Router();
//const future contoller with the db queries


router.use("/")
    .get()
    .post();

router.use("/:id")
    .get()
    .post()
    .update()
    .delete();

module.exports = router;