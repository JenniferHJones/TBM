const router = require("express").Router();
const userController = require("../../controllers/userController");

router.route("/login").post(userController.login);
router.route("/validate").post(userController.validateToken);
router.route("/register").post(userController.register);

module.exports = router;
