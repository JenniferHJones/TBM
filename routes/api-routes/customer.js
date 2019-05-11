const router = require("express").Router();
const customerController = require("../../controllers/customerController");

router.route("/login").post(customerController.login);
router.route("/validate").post(customerController.validateToken);
router.route("/register").post(customerController.register);

module.exports = router;
