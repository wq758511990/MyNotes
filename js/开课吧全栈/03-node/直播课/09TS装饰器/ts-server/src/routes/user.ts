import * as Koa from 'koa'
import {get, post, middlewares} from '../utils/decors'
import model from '../model/user' 
const users: object[] = [{ name: 'tom' }]

@middlewares([
    async function guard(ctx: Koa.Context, next: () => Promise<any>) {

        if (ctx.header.token) {
            await next();
        } else {
            throw "请登录";
        }
    }
])
export default class User {
    @get('/users')
    public async list(ctx: Koa.Context): Promise<void> {
        const users = await model.findAll()
        ctx.body = {
            ok: 1,
            data: users
        }
    }

    @post('/users', {
        middlewares: [
            async function validation(ctx: Koa.Context, next: () => Promise<any>) {
                // 必须输入用户名
                const name = ctx.request.body.name
                if (!name) {
                    throw '请输入用户名'
                }
                await next()
            }
        ]
    })
    public add(ctx: Koa.Context): void {
        users.push(ctx.request.body)
        ctx.body = { ok: 1, users }
    }
}