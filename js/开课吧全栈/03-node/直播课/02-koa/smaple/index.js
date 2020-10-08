const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    const start = new Date().getTime()
    console.log(`start : ${ctx.url}`)
    await next() // 跳到下一个中间件 执行完成之后回来
    const end = new Date().getTime()
    console.log(`请求${ctx.url} , 耗时 : ${end - start}ms`)
})

app.use(async (ctx, next) => {
    console.log('handling')
    ctx.body = [
        {
            name: 'tom'
        }
    ]
    await next()
})

app.listen(8878)