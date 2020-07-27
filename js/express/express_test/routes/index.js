var express = require('express');
var router = express.Router();

// 路由器级别的中间件
// 用法和app， 应用层级别的中间件一样，只不过这里只针对该路由

// 这样子就只在该层，也就是index层下的 / 级别的get请求中添加了一个中间件
// 路由器级别的中间件要跳过中间件使用的是next('router') app级别的是 next('route')

router.get('/', (req, res, next) => {
  req.requestTime = new Date().toLocaleString()
  next()
})


/* GET home page. */
router.get('/', function(req, res, next) {

  // res.render('index', { title: 'Express' });
  requestText = `<h1>这是index页面</h1><br \\>访问时间是${req.requestTime}`
  res.send(requestText)
});


router.post('/', (req, res, next) => {
  console.log(req.requestTime)
  res.send('this is a post method')
})

// 同一个地址可以用route的方法指定路径之后 再写get、post方法
router.route('/get')
  .get((req, res) => {
    // req.query 获取get请求参数
    res.send('user get method')
  })
  .post((req, res) => {
    // req.body 获取post请求体
    res.send('user post method')
  })

module.exports = router;
