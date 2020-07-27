var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// console.log(__dirname) C:\Users\admin\Desktop\MyNotes\js\express\express_test
// console.log(path.join(__dirname, 'public'))

app.use(express.static(path.join(__dirname, 'public')));

// var requestTime = function (req, res, next) {
//   req.requestTime = new Date().toLocaleString()
//   next()
// }

// app.get('/users', requestTime) // 这样就只有/users下的请求使用该中间件
// 也可以指定use为get， 这样只有users下的get请求会使用该中间件

// 要从路由器中间件堆栈中跳过其余中间件功能，请调用next('route')将控制权传递给下一条路由。
// 注意：next('route')仅适用于使用app.METHOD()或router.METHOD()函数加载的中间件函数

// 即若app.get('路径')中有许多个中间件 在其中某个中间件因为某个条件不成立从而想要直接跳过剩余所有中间件就可以使用next('route')

// 中间件也可以作为数组来声明使用， 类似
// app.get('/users', [requestTime, requestxxx], (req, res, next) => {
//  res.send('123')
//})

// 这样就可以在用get方法调用/users下的方法的时候调用requestTime, requestxxx中间件

// 如果将任何内容传递给next()函数（字符串除外'route'），Express都会将当前请求视为错误，并且将跳过所有剩余的非错误处理路由和中间件函数

// 捕捉错误
// 确保Express能够捕获运行路由处理程序和中间件时发生的所有错误，这一点很重要

// 通过next(err) 将错误传递给express
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});




// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
