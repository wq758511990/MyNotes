import * as Koa from 'koa'
import * as bodify from 'koa-body'
import * as serve from 'koa-static'
import { load } from './utils/decors'
import { resolve } from 'path'

import { Sequelize } from 'sequelize-typescript'

const database = new Sequelize({
    port:3306,
    database:'kaikeba',
    username:'admin',
    password:'zixin3559',
    dialect:'mysql',
    modelPaths: [`${__dirname}/model`],    
});

database.sync({force: true})

const app = new Koa()

app.use(serve(`${__dirname}/public`))

app.use(
    bodify({
        multipart: true,
        strict: false // 非严格模式，可以解析delete请求
    })
)

const router = load(resolve(__dirname, './routes'))

app.use(router.routes())

// app.use((ctx: Koa.Context) => {
//     ctx.body = 'hello ts-koa '
// })

app.listen(3000, () => {
    console.log('running on 3000')
})