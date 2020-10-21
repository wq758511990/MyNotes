const { Controller } = require('egg')

class UserController extends Controller {
  async getUser() {
    const {ctx} = this
    ctx.helper.success(ctx, {
      msg: 'get user successfully'
    })
  }

  async addUser() {
    const {ctx} = this
    ctx.helper.success(ctx, {
      msg: 'add user successfully'
    })
  }
}

module.exports = UserController