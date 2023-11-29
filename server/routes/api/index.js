const router = require("express").Router();
const chatGPT = require("./chatgpt");
const userRoutes = require("./userRoutes.js")

router.use("/chatgpt", chatGPT);
router.use("/issue", userRoutes);

module.exports = router;
