const { Controller } = require('egg')

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: 0,
      data
    }
  }

  notFound(msg) {
    msg = msg || '404 not found'
    this.ctx.body = {
      code: -1,
      msg
    }
  }
}

module.exports = BaseController