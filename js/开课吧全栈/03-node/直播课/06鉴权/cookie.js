const http = require('http')
const session = {}
http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        res.end('')
        return 
    }

    // 观察cookie
    console.log('cookie:', req.headers.cookie)

    // 设置cookie
    // res.setHeader('Set-Cookie', 'cookie1=123')
    // res.end('hello cookie')

    // session, 把键给客户端去存
    const sessionKey = 'sid'
    const cookie = req.headers.cookie

    if (cookie && cookie.indexOf(sessionKey) !== -1) {
        // 登陆了
        res.end('come back')
        const sid = cookie.split('=')[1]
        console.log('session', sid, session, session[sid])
    } else {
        // 没登陆
        const sid = (Math.random() * 1000).toFixed()
        // 设置cookie
        res.setHeader('Set-Cookie', `${sessionKey}=${sid}`)
        session[sid] = {name: 'laowang'}
        res.end('hello')
    }
})
.listen(3000, () => {
    console.log('running on 3000')
})