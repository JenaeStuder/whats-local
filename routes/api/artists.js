
const router = require("express").Router();

const localController = require("../../controllers/localController");
console.log(localController);

router.route("/")
    .get()
    .post(localController.create);

router.route("/:id")
    .get(localController.findById)
    // .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);
// routes for the media files
router.route("/media/:id")
    .put(localController.addStorageItem)
    .delete(localController.removeStorageItem)

module.exports = router;