'use strict';

const mongoose = require('mongoose');
// const User = mongoose.model('User');
const User = require('../models/userModel');
const commonHelper = require('../helpers/common')

module.exports = {
    createUser: async (req, res) => {
        try {
          // check if user already exists
          let user = await User.findOne({ email: req.body.email });
          if (user) return res.status(400).send({ success: false, message: "User already exists" });
          user = new User(req.body);
          user.password = commonHelper.hashPassword(req.body.password);
            user = await user.save();
            return res.status(200).send({ success: true, message: 'User created successfully', data: user._id });
        } catch (err) {
            return res.status(500).send({ success: false, message: 'Some err occured' });
        }
    }
}