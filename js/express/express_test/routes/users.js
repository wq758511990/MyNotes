var express = require('express');
var router = express.Router();

var mysql = require("mysql")

var connection = mysql.createConnection({
  host: '47.95.34.78',
  user: 'root',
  password: 'zixin3559',
  database: 'myweb'
})

connection.connect()

/* GET users listing. */
router.get('/', async function(req, res, next) {
  var data = await connection.query(`select * from user`, (err, rows, fields) => {
    if(err) throw err
    // console.log(rows) 数据信息
    // console.log(fields) 表格每个字段对应信息
    res.send(rows);
  })
});

router.post('/', (req, res, next) => {
  res.send('a post request to users')
})

router.put('/', (req, res, next) => {
  res.send('a put request to users')
})

router.delete('/', (req, res, next) => {
  res.send('a delete request to users')
})


module.exports = router;
