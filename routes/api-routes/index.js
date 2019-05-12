const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./user");

router.use("/posts", postRoutes);
router.use("/user", userRoutes);

module.exports = router;
