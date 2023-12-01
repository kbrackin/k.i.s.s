const router = require("express").Router();
const chatGPT = require("./chatgpt");
const userRoutes = require("./userRoutes.js");

router.use("/chatgpt", chatGPT);
router.use("/data", userRoutes);

module.exports = router;
