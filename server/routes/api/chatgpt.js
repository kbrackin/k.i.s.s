const router = require("express").Router();
const { authMiddleware } = require("../../utils/auth");

const { getTest, postAnswer } = require("../../controllers/gptController.js");

router.route("/").post(authMiddleware, postAnswer);

module.exports = router;
