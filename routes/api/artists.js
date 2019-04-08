const router = require("express").Router();
const artistController = require("../../controllers/localController");
//const future contoller with the db queries


router.use("/")
    .get(localController.findAll)
    .post(localController.create);

router.use("/:id")
    .get(localController.findById)
    .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);

module.exports = router;