const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
    // console.log('request')
    // res.end(`hello world`)
    const { url, method, headers } = req
    console.log('url', url)
    if (url === '/' && method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain;charset=utf-8' })
                res.end('服务器错误')
            }
            res.statusCode = 200
            res.setHeader('Content-Type', 'text/html')
            res.end(data)
        })
    } else if (url === '/user' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        const resData = {
            name: 'www',
            age: 18
        }
        res.end(JSON.stringify(resData))
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        // req, res就是两个流
        fs.createReadStream('.' + url).pipe(res)
    }
})
    .listen(3000, () => {
        console.log('http server running on ' + 3000)
    })