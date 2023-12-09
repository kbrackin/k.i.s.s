const { User } = require("../models");

const { signToken } = require("../utils/auth");

module.exports = {
  async createUser({ body }, res) {
    const userinfo = await User.create(body);

    if (!userinfo) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(userinfo);
    res.json({ token, userinfo });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const userinfo = await User.findOne({
      $or: [{ username: body.username }, { email: body.email }],
    });
    if (!userinfo) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await userinfo.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: "Wrong password!" });
    }
    const token = signToken(userinfo);
    res.json({ token, userinfo });
  },
  async getOneUser({ user = null, params }, res) {
    const singleUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    })
    if (!singleUser) {
      return res.status(400).json({ message: 'no user exists' })
    }
    res.json(singleUser)
  }


};
