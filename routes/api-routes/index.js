const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./user");
const formRoutes = require("./PropertyForm")

router.use("/posts", postRoutes);
router.use("/user", userRoutes);
router.use("/propertyform", formRoutes);

module.exports = router;
