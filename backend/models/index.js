/******************************************************************************
 * MODELS LOADER
 * CREATE NEW MODEL FILE AND EACH FILE WILL BE LOADED AUTOMATICCALY
 ******************************************************************************/
'use strict';

const fs = require('fs');
const path = require('path');

fs.readdirSync(__dirname).forEach(file => {
    if (/(.*)\.(js$)/.test(file)) {
        require(path.join(__dirname, file))
        // console.log(__dirname , __filename)
        // require(__dirname + '/' + file);
    }
})