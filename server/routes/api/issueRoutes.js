const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  getAllRequestors,
  getAllIssues,
  putIssue,
  getAUser,
} = require("../../controllers/dbController.js");

router.route("/:userID").post(putIssue).get(getAUser);

router.route("/issues").get(getAllIssues);

router.route("/users").get(authMiddleware, getAllRequestors);

module.exports = router;
