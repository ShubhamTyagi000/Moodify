'use strict'
const express = require('express');
const mongoose = require('mongoose');
const URI =
  "mongodb+srv://Shubham_Tyagi:up17L4582@cluster0.dtrkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT = 8081;
const app = express();

mongoose.connect(URI)
    .then(() => console.log('connected to db'))
    .catch((err) => console.log(err))
    

//  mongo string:   mongodb+srv://Shubham_Tyagi:<db_password>@cluster0.dtrkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

app.listen(PORT, () => console.log('app running'));