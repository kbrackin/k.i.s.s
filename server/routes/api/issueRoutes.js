const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  putUser,
  getAllRequestors,
  routeTest,
  getAllIssues,
  putIssue,
} = require("../../controllers/dbController.js");

// router.route("/users").post(putUser).get(routeTest);

router.route("/:userID").post(putIssue);

router.route("/issues").get(getAllIssues).post(putUser);

router.route("/users").get(getAllRequestors);

module.exports = router;
