const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  putUser,
  routeTest,
  getAllIssues,
  putIssue,
} = require("../../controllers/dbController.js");

// router.route("/users").post(putUser).get(routeTest);

router.route("/:userID").post(putIssue);

router.route("/").get(getAllIssues).post(putUser);

module.exports = router;
