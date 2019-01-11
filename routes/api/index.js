const router = require("express").Router();
const userRoutes = require("./users");
const jobRoutes = require("./jobs");

// user routes
router.use("/user", userRoutes);
router.use("/job", jobRoutes);

module.exports = router;
