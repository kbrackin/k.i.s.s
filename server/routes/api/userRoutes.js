const router = require("express").Router();

const {
  putUser,
  routeTest,
  putIssue,
} = require("../../controllers/dbController.js");

router.route("/users").post(putUser).get(routeTest);

router.route("/users/:userID").post(putIssue);

router.route("/");

module.exports = router;
