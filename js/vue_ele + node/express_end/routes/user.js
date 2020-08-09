var express = require('express');
var router = express.Router();
const Result = require('../models/Result')
const { login, selectUser } = require('../services/user')
const { md5, decode } = require('../utils/index')
const { PWD_SQLT, PRIVATE_KEY, JWT_EXPIRED } = require('../utils/constant')
const { body, validationResult } = require('express-validator')
const boom = require('boom')
const jwt = require('jsonwebtoken')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', [
  body('username').isString().withMessage('用户名必须为数字')
], (req, res, next) => {
  const err = validationResult(req)
  if (!err.isEmpty()) {
    // 如果有错
    const [{ msg }] = err.errors
    next(boom.badRequest(msg))
  } else {
    let { username, password } = req.body
    password = md5(`${password}${PWD_SQLT}`)
    login(username, password).then((user) => {
      if (!user || user.length == 0) {
        new Result('登录失败').fail(res)
      }
      else {
        const token = jwt.sign(
          { username },
          PRIVATE_KEY,
          { expiresIn: JWT_EXPIRED }
        )
        new Result({ token }, '登录成功').success(res)
      }
    })
  }
})

router.get('/info', (req, res, next) => {
  selectUser('admin').then(user => {
    const decoded = decode(req)
    if(user) {
      user.roles = [user.role]
      new Result(user, '查询成功').success(res)
    } else {
      new Result('查询失败').fail(res)
    }
  })
})

module.exports = router;
