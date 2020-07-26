var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
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
