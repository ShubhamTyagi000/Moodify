'use strict';
const mongoose = require('mongoose');
const db = require('../config/config').db;
mongoose.set('strictQuery', false);
mongoose.connect(db.url)
    .then(() => {
        console.log("Database connection done")
    })
    .catch((err) => { console.log('some err occured', err)});
// console.log('Database connection done')