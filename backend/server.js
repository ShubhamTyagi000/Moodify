'use strict'
const express = require('express');
const mongoose = require('mongoose');
const server = require('./config/config').server
// const PORT = 8081;
const app = express();

require('./lib/database')
app.listen(server.port, () => console.log('app running'));               