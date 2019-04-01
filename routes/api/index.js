const router = require("express").Router();
const artistRoutes = require("./artists");
const userRoutes = require("./users");

// artist routes
router.use("/artists", artistRoutes);

//user routes
router.use("/users", userRoutes)

module.exports = router;