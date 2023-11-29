const router = require("express").Router();

const { putIssue, routeTest } = require("../../controllers/dbController.js");

router.route("/").post(putIssue).get(routeTest);

router.route("/");

module.exports = router;