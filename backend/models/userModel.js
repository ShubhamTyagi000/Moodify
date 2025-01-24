/******************************************************************
 * USER MODEL
 *****************************************************************/

'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true, index: true },
    password: { type: String, required: true, trim: true, default: '' },
    profilePicture: { type: String, default: '' }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
