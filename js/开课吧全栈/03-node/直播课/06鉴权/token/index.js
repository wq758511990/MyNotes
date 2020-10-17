const Koa = require('koa')
const router = require('koa-router')()
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const app = new Koa();
const jwt = require("jsonwebtoken");
const jwtAuth = require("koa-jwt");

const secret = "it's a secret";
app.use(bodyParser())
app.use(static(__dirname + '/'));


router.post('/user/login-token', async ctx => {
    const { body } = ctx.request
    // 匹配成功
    const userinfo = body.username
    ctx.body = {
        msg: '登陆成功',
        user: userinfo,
        token: jwt.sign({
            data: userinfo,
            exp: Math.floor(Date.now() / 1000) + 60 * 60
        }, secret) // jwt模块进行签名
    }
})


router.get('/user/getUser-token', jwtAuth({ // jwtAuth是提供好的中间件
    secret // 解析token， 在ctx中加上state属性
}), async ctx => {
    console.log(ctx.state.user)
    ctx.body = {
        msg: '获取成功',
        userinfo: ctx.state.user.data
    }
})

app.use(router.routes())

app.listen(3000, () => {
    console.log('running on 3000')
})