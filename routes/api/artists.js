
const router = require("express").Router();

const localController = require("../../controllers/localController");
//console.log(localController);

router.route("/")
    .get(function(){console.log("full route hit");
    })
    .post(localController.create);

router.route("/:id")
    .get(localController.findById)
    // .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);
// routes for the media files
router.route("/media/op/:id")
    .put(localController.addStorageItem)
    .delete(localController.removeStorageItem)
router.route("/profile/:id")
    .get(localController.findById)
    .put(localController.updatePic)
module.exports = router;

//localController.addStorageItem