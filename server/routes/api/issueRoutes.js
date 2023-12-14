const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  getAllRequestors,
  putIssue,
  updateIssue
} = require("../../controllers/dbController.js");

router.route("/:userID").post(putIssue, authMiddleware);

// router.route("/issues").get(getAllIssues);

router.route("/users").get(authMiddleware, getAllRequestors);

router.route("/:userID/:issueID").put(updateIssue)

module.exports = router;
