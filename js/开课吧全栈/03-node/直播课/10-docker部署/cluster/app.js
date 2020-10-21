const http = require('http')
const server = http.createServer((req, res) => {
    Math.random() > 0.5 ? aa() : ''
    res.end('hello ...')
})

// 是否被引入了
if (!module.parent) {
    // 未被引入
    server.listen(3000, () => {
        console.log('running on 3000')
    })
} else {
    module.exports = server
}