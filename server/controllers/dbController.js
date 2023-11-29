const express = require("express");
const router = express.Router()

const { user,issues } = require('../models')

module.exports = {

    async putIssue(req, res) {
        try {
          const user = await user.create(req.body)
          res.json(user);
        } catch (err) {
          res.status(500).json(err);
        }
      },

      

      async routeTest(req, res) {
        try {
          res.send("Test Worked")
        } catch (err) {
          res.status(500).json(err);
        }
      },

 }

    
