var express = require("express");
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');

var mongooseCon = require('./mongodb/connection');
var createidRoute = require('./routes/create-identifier');
var notificationRoute = require('./routes/notification')

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/create_id',createidRoute);
app.use('/notification',notificationRoute);
app.use((req,res,next)=>{
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
})
app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = err;
    res.status(err.status || 500);
    res.send(err);
})

app.listen(8080);