var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
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
