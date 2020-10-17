const Koa = require('koa')
const router = require('koa-router')()
const session = require('koa-session')
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const app = new Koa();

//配置session的中间件
app.use(cors({
    credentials: true
}))
app.keys = ['some secret'];

app.use(static(__dirname + '/'));
app.use(bodyParser())
app.use(session(app));

// 鉴权
app.use((ctx, next) => {
    if (ctx.url.indexOf('login') > -1) {
        next()
    } else {
        console.log('session', ctx.session.userInfo)
        if (!ctx.session.userInfo) {
            ctx.body = {
                message: '登陆失败'
            }
        } else {
            next()
        }
    }
})


router.post('/user/login', async ctx => {
    const {body} = ctx.request
    // 密码匹配之后
    // 设置session
    ctx.session.userInfo = body.userName
    ctx.body = {
        msg: '登陆成功'
    }
})

router.post('/user/logout', async ctx => {
    // 删除userInfo
    delete ctx.session.userInfo

    ctx.body = {
        msg: '登出成功'
    }
})

router.get('/user/getUser', async ctx => {
    ctx.body = {
        msg: '获取成功',
        userInfo: ctx.session.userInfo
    }
})

app.use(router.routes())

app.listen(3000, () => {
    console.log('running on 3000')
})