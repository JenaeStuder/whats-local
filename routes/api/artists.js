
const router = require("express").Router();
<<<<<<< HEAD
=======
const localController = require("../../controllers/localController");
>>>>>>> 6e777616daab0ffba365e3802d15195a3c3ae552
//const future contoller with the db queries


router.use("/")
    .get()
    .post();

router.use("/:id")
<<<<<<< HEAD
    .get()
    .post()
    .update()
    .delete();
=======
    .get(localController.findById)
    .post(localController.create)
    .put(localController.update)
    .delete(localController.remove);
// routes for the media files
router.use("/media/:id")
    .put(localController.addStorageItem)
>>>>>>> 6e777616daab0ffba365e3802d15195a3c3ae552

module.exports = router;