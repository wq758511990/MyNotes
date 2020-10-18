import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as serve from 'koa-static'

const app = new Koa()

app.use(serve(`${__dirname}/public`))

app.use(
    bodify({
        multipart: true,
        strict: false // 非严格模式，可以解析delete请求
    })
)

app.use((ctx: Koa.Context) => {
    ctx.body = 'hello ts-koa '
})

app.listen(3000, () => {
    console.log('running on 3000')
})