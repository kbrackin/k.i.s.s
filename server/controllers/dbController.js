const { user, issues } = require("../models");

module.exports = {
  async putUser(req, res) {
    try {
      const User = await user.create(req.body);
      res.json(User);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async putIssue(req, res) {
    console.log(req.body);

    try {
      const UserIssue = await user.findOneAndUpdate(
        { _id: req.params.userID },
        { $push: { issues: req.body } },
        { runValidators: true, new: true }
      );
      if (!UserIssue) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(UserIssue);
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
