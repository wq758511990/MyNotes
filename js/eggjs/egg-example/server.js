const http = require('http')

http.createServer((req, res) => {
  res.end('123')
})
.listen(7001, () => {
  console.log('running on 7001')
})