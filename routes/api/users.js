const router = require("express").Router();
// const for future controllers that contain the queries

router.route("/")
    .post();

router.route("/:id")
    .get()
    .post()
    .put()
    .delete()

module.exports = router; 