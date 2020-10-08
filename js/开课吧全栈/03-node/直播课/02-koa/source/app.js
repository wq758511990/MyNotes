const KKB = require('./kkb')
const app = new KKB()

app.use(ctx => {
    ctx.body = 'hello ctx' // koa2 中 直接返回ctx.body的内容, 故而kkb.js中最后返回的是body
})

app.listen(3000, () => {
    console.log('server running on ' + 3000)
})