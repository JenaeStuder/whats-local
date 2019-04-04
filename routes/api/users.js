const router = require("express").Router();
const localController = require("../../controllers/localController")
// const for future controllers that contain the queries

router.use("/")
    .post(localController.create);

router.use("/:id")
    .get(localController.findAll)
    .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);

module.exports = router; 