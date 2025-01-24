'use strict';

const fs = require('fs');

fs.readdirSync(__dirname).forEach((file) => {
    if (/(.*)\.(js$)/.test(file)) {
        require(__dirname + '/' + file);
    }
})