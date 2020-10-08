const http = require('http')
function updateTime() {
    setInterval(() => {
        this.time = new Date().toUTCString()
    }, 1000);
    return this.time
}

http.createServer((req, res) => {
    const { url } = req
    if (url === '/') {
        res.end(`
            <html>
                Html updatetime ${updateTime()}
                <script src='main.js'></script>
            </html>
        `)
    }
    else if (url === '/main.js') {
        const content = `document.writeln('<br>JS update time ${updateTime()}')`
        // 强缓存
        // res.setHeader('Expires', new Date(Date.now() + 10 * 1000).toUTCString())
        // res.setHeader('Cache-control', 'max-age=20') // 优先级更高

        // 协商缓存(通过时间)
        // res.setHeader('Cache-control', 'no-cache') 
        // res.setHeader('last-modified', new Date().toUTCString())
        // // 3s内再次请求时
        // if (new Date(req.headers['if-modified-since']).getTime() + 1000 * 3 > Date.now()) {
        //     console.log('协商缓存')
        //     res.statusCode = 304
        //     res.end()
        //     return
        // }

        // 协商缓存(通过内容)
        const crypto = require('crypto')
        const hash = crypto.createHash('sha1').update(content).digest('hex')
        res.setHeader('Etag', hash)
        if (req.headers['if-none-match'] === hash) {
            console.log('etag缓存')
            res.statusCode = 304
            res.end()
            return
        }

        res.statusCode = 200
        res.end(content)
    } 
    else if (url === '/favicorn.ico') {
        res.end('')
    }
})
.listen(3000, () => {
    console.log('http cache test run at ' + 3000)
})