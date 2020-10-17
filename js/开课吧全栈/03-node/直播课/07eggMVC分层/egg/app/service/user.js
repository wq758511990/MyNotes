const {Service} = require('egg')
class UserService extends Service {
    async getAll() {
        const {ctx} = this
        return await ctx.model.User.findAll()
    }
}

module.exports = UserService