import * as Koa from 'koa'

const users: object[] = [{ name: 'tom' }]

export default class User {
    public list(ctx: Koa.Context): void {
        ctx.body = {
            ok: 1,
            data: users
        }
    }

    public add(ctx: Koa.Context): void {
        users.push(ctx.request.body)
        ctx.body = { ok: 1 }
    }
}