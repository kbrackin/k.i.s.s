const router = require("express").Router();
const chatGPT = require("./chatgpt");
const userRoutes = require("./authRoutes.js");
const issueRoutes = require("./issueRoutes.js");

router.use("/chatgpt", chatGPT);
router.use("/auth", userRoutes);
router.use("/issue", issueRoutes);

module.exports = router;
