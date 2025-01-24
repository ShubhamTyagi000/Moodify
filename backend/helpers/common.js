'use strict';

const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.hashPassword = (password) => {
    return bcrypt.hashSync(password, saltRounds);
}