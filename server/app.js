var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var ejs = require('ejs');
var app = express();

// var webpack = require('webpack'),
//     webpackDevMiddleware = require('webpack-dev-middleware'),
//     webpackHotMiddleware = require('webpack-hot-middleware'),
//     webpackDevConfig = require('./webpack.config.js');

// view engine setup
// app.set('views', path.join(__dirname, 'client/'));
app.set('views', path.join(__dirname, '../client/view'));
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.use(express.static(path.join(__dirname, '../client')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());


app.use('/', index);

// 新增接口路由
app.get('/data/:module', function (req, res, next) {
    var c_path = req.params.module;
    console.log(c_path)
    var action = require('./test/test');
    console.log("env"+ process.env.NODE_ENV);
    action.execute(req, res);

});

// app.use('/users', users);

// catch 404 and forward to error handler
// app.use(function (req, res, next) {
//     var err = new Error('Not Found');
//     err.status = 404;
//     next(err);
// });
//
// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
//     res.render('error');
// });


module.exports = app;
