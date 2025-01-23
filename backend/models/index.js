/******************************************************************************
 * MODELS LOADER
 * CREATE NEW MODEL FILE AND EACH FILE WILL BE LOADED AUTOMATICCALY
 ******************************************************************************/
'use strict';

const fs = require('fs');

fs.readdirSync(__dirname).forEach(file => {
    if (/(.*)\.(js$)/.test(file)) {
        require(__dirname + '/' + file);
    }
})