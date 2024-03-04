var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const cors = require("cors");
var logger = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const { MongoClient } = require('mongodb');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var songRouter = require('./routes/song');

var app = express();


//DATABASE
const uri = 'mongodb+srv://dawit:xxscYeKgnjm1hrRQ@cluster0.nxskok8.mongodb.net/songDb?retryWrites=true&w=majority';

mongoose.connect(uri, {}).then(con => {
  console.log('DB connection successful!')
})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  cors({
    exposedHeaders: "X-CSRF-Token",
    credentials: true,
    accessControlAllowCredentials: true,
    origin: [
      "http://localhost:3000",
    ],
  })
);


// Middleware
app.use(bodyParser.json());

//app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/song', songRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
