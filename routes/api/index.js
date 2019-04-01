const router = require("express").Router();
const artistRoutes = require("./artists");

// Book routes
router.use("/artists", artistRoutes);

module.exports = router;
