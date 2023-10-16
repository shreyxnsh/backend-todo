// file to use express to create routes for the apis
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const userRouter = require('./routers/user.routers');

// body parser is used to get data which comes in the body 
app.use(bodyParser.json());

// when user adds data in body and send requests
// register function of the controller will be called
// this function will use the services of user registration
app.use('/', userRouter);

module.exports = app;
