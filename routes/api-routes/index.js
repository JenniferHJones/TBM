const router = require("express").Router();
const postRoutes = require("./posts");
const customerRoutes = require("./customer");

router.use("/posts", postRoutes);
router.use("/customer", customerRoutes);

module.exports = router;
