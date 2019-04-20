
const router = require("express").Router();

const localController = require("../../controllers/localController");
//console.log(localController);

router.route("/")
    .post(localController.create);

router.route("/:id")
    .get(localController.findById)
    // .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);
// routes for the media files
router.route("/media/op")
    .put(localController.addStorageItem)
    .delete(localController.removeStorageItem)
router.route("/profile/pic/:id")
    .put(localController.updatePic)
module.exports = router;

//localController.addStorageItem