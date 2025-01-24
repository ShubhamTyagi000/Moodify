'use strict'
const express = require('express');
const server = require('./config/config').server
const userRoute = require('./routes/userRoutes')
const app = express();

app.use(express.json());
app.use('/api', userRoute);

require('./lib/database');
require('./models')
// console.log(require('./lib/database'))
// require('./routes');
app.listen(server.port, () => console.log('app running at port:',server.port));               