const { User, issues } = require("../models");

module.exports = {
  // async putUser(req, res) {
  //   try {
  //     const User = await user.create(req.body);
  //     res.json(User);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },

  async putIssue(req, res) {
    console.log(req.body);

    try {
      const UserIssue = await User.findOneAndUpdate(
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

  async getAllIssues(req, res) {
    console.log("hit");

    try {
      const allIssues = await User.find({})
        .sort({ _id: -1 })
        .select("-password");
      res.json(allIssues);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getAllRequestors(req, res) {
    console.log(req.body);

    try {
      const allReq = await User.find().select("-password");
      res.json(allReq);
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

  async updateIssue(req,res) {
    try{
    const isResolved = await User.findOneAndUpdate(
      { _id: req.params.userID,"issues._id":req.params.issueID },
      { $set: { "issues.$.resolved" :req.body.resolved }},
      { runValidators: true, new: true })
      if(isResolved){
        res.json(isResolved)
      }else{
        res.status(400).json()
      }

    }catch (err){
      res.status(500).json(err)
    }
  }

  // async getAUser(req, res) {
  //   console.log(req.body);

  //   try {
  //     const aUser = await User.findOne({ _id: req.params.userID });
  //     if (!aUser) {
  //       return res.status(404).json({ message: "No user with this id!" });
  //     }
  //     res.json(aUser);
  //   } catch (err) {
  //     res.status(500).json(err);
  //   }
  // },
};
