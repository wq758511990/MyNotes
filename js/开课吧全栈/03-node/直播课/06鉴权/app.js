const koa = require('koa')
const app = new koa()
const session = require('koa-session')

const redisStore = require('koa-redis')

const redis = require('redis')
const redisClient = redis.createClient(6379, 'localhost')

app.keys = ['some secret']

// 配置
const SESS_CONFIG = {
    key: 'kkb:sess',
    maxAge: 1000 * 60 * 60 * 24, // 一天
    httpOnly: true, // js无法读取
    signed: false // 防止session篡改 为true的时候 会存储一个kkb:sess.sig 
}

// 注册
app.use(session(SESS_CONFIG, app))

// 测试
app.use(ctx => {
    // 因为加载了session， 故而可以ctx.session
    if (ctx.path === '/favicon') {
        // 获取
        let n = ctx.session.count || 0

        // 设置
        ctx.session.count = ++n
        ctx.body = `第${n}次访问`
    }
})
.listen(3000, () => {
    console.log('running on 3000')
})