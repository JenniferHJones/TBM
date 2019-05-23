const router = require("express").Router();
const formController = require("../../controllers/formController");

router.route("/propertyform").post(formController.addProperty);

module.exports = router;