const router = require("express").Router();
// const for future controllers that contain the queries

router.use("/")
    .post();

router.use("/:id")
    .get()
    .post()
    .update()
    .delete()

module.exports = router; 