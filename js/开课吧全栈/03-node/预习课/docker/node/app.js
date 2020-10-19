const Koa = require('koa')
const app = new Koa()
app.use(ctx => {
    ctx.body = 'hello nodejs!!!'
})

app.listen(3000, () => {
    console.log('running on 3000')
})