const router = require("express").Router();
const tableController = require("../../controllers/tableController");
const updateController = require("../../controllers/tableController");

router.route("/:id").post(tableController.tableFindAll);
router.route("/:id").put(updateController.updateLeased);

module.exports = router;
