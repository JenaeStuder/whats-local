
const router = require("express").Router();

const localController = require("../../controllers/localController");
//const future contoller with the db queries


router.use("/")
    .get()
    .post();

router.use("/:id")
    .get(localController.findById)
    .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);
// routes for the media files
router.use("/media/:id")
    .put(localController.addStorageItem)
    .delete(localController.removeStorageItem)

module.exports = router;