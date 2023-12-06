const { user } = require("../models");

const { signToken } = require("../utils/auth");

module.exports = {
  async createUser({ body }, res) {
    const userinfo = await user.create(body);

    if (!userinfo) {
      return res.status(400).json({ message: "Something is wrong!" });
    }
    const token = signToken(userinfo);
    res.json({ token, userinfo });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const userinfo = await user.findOne({
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
};
