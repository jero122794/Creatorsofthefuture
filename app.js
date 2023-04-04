const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const methodOverride = require('method-override');
const indexRouter = require('./routes/index');
const session = require('express-session')

const app = express();
// server setup
app.listen(3000, console.log("Online 3000"))


app.use(express.static(path.resolve(__dirname, 'public')))
app.use(methodOverride("_method"));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('views', './views/')
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
  secret: "Creatorsofthefuture",
  cookie: { maxAge: oneDay },
  saveUninitialized: true,
  resave: false
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler


module.exports = app;
