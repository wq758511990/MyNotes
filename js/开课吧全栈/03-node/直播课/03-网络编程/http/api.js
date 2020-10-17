const http = require('http')
const fs = require('fs')
http.createServer((req, res) => {
    const { url, method, headers } = req
    console.log('url', url)
    console.log('method', method)
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
    } else if (url === '/api/users' && method === 'GET') {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
        res.setHeader('Set-Cookie', 'cookie1=va') // 设置cookie
        const resData = {
            name: 'www',
            age: 18
        }
        res.end(JSON.stringify(resData))
    } else if (method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        // req, res就是两个流
        fs.createReadStream('.' + url).pipe(res)
    } else if (method === 'OPTIONS' && url === '/api/users') {
        res.setHeader('Access-Control-Allow-Credentials', 'true');
        res.writeHead(200, {
            "Access-Control-Allow-Origin": "http://localhost:3000",
            "Access-Control-Allow-Headers": "X-Token,Content-Type",
            "Access-Control-Allow-Methods": "PUT"
        });
        res.end();
    } else if (method === "POST" && url === "/api/save") {
        // 流传输
        let reqData = [];
        let size = 0;
        req.on('data', data => {
            console.log('>>>req on', data);
            reqData.push(data);
            size += data.length;
        });
        req.on('end', function () {
            console.log('end')
            const data = Buffer.concat(reqData, size);
            console.log('data:', size, data.toString())
            res.end(`formdata:${data.toString()}`)
        });

    } else if (method === "POST" && url === "/api/upload") {

    }
})
    .listen(4000, () => {
        console.log('http server running on ' + 4000)
    })