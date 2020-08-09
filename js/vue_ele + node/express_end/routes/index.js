var express = require('express');
var router = express.Router();
const userRouter = require('./user')
const Result = require('../models/Result')
const boom = require('boom')
const { jwtAuth } = require('../utils/jwt')

router.use(jwtAuth)

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/user', userRouter);

/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */
router.use((req, res, next) => {
  next(boom.notFound('接口不存在'))
})

/**
 * 自定义路由异常处理中间件
 * 注意两点：
 * 第一，方法的参数不能减少
 * 第二，方法的必须放在路由最后
 */
router.use((err, req, res, next) => {
  if (err.name && err.name === 'UnauthorizedError') {
    const { status = 401, message } = err
    new Result(null, 'Token验证失败', {
      error: status,
      errMsg: message
    }).jwtError(res.status(status))
  } else {
    const msg = (err && err.message) || '系统错误'
    const statusCode = (err.output && err.output.statusCode) || 500;
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
    new Result(null, msg, {
      error: statusCode,
      errorMsg
    }).fail(res.status(statusCode))
  }
})

module.exports = router