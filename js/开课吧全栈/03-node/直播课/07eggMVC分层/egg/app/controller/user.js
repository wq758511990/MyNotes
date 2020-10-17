const { Controller } = require('egg')

class UserController extends Controller {
    async index() {
        const { ctx } = this
        // service 会被自动加载。。
        ctx.body = await ctx.service.user.getAll()
    }
    async test() {
        this.ctx.body = {
            name: 'test'
        }
    }
}

module.exports = UserController