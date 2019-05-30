const router = require("express").Router();
const tableController = require("../../controllers/tableController");

router.route("/").post(tableController.tableFindAll);

module.exports = router;