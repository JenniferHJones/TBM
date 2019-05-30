const router = require("express").Router();
const postRoutes = require("./posts");
const userRoutes = require("./user");
const formRoutes = require("./PropertyForm");
const propertyTableRoutes = require("./property")

router.use("/posts", postRoutes);
router.use("/user", userRoutes);
router.use("/propertyform", formRoutes);
router.use("/property", propertyTableRoutes);


module.exports = router;
