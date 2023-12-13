const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const {
  getAllRequestors,
  putIssue,
} = require("../../controllers/dbController.js");

router.route("/:userID").post(putIssue, authMiddleware);

// router.route("/issues").get(getAllIssues);

router.route("/users").get(authMiddleware, getAllRequestors);

module.exports = router;
