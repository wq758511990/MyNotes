const express = require('express')
const app = express()
const { createProxyMiddleware } = require('http-proxy-middleware')
app.use(express.static(__dirname + '/')) // 加载当前文件所在路径的其他文件
// 代理
app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4000'
}
))
app.listen(3000)