const { Controller } = require('egg')

class UserController extends Controller {
    async getUser() {
        const { ctx } = this
        ctx.body = {
            msg: '123'
        }
    }

    async addUser() {
        const { ctx } = this
        ctx.body = {
            msg: '456'
        }
    }
}

module.exports = UserController