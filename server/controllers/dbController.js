const { user, issues } = require("../models");

module.exports = {
  async putIssue(req, res) {
    try {
      const User = await user.create(req.body);
      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async routeTest(req, res) {
    try {
      res.send("Test Worked");
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
