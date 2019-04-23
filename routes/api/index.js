const router = require("express").Router();
const artistRoutes = require("./artists");
const userRoutes = require("./users");

// Book routes
router.use("/artists", artistRoutes);
router.use("/users", userRoutes);

module.exports = router;
