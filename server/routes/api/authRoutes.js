const router = require("express").Router();
const { createUser, login, getOneUser } = require("../../controllers/userauth");

// import middleware
const { authMiddleware } = require("../../utils/auth");

// put authMiddleware anywhere we need to send a token for verification of user
router.route("/").post(createUser).put(authMiddleware);

router.route("/login").post(login);
router.route('/me').get(authMiddleware, getOneUser)

module.exports = router;
