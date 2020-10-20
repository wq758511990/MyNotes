const BaseController = require('../core/baseController')

class NewsController extends BaseController {
  async list() {
    const ctx = this.ctx;
    // console.log(this.config.news)
    // console.log('ctx', ctx.app.name)
    // console.log('this', this.app.name)
    const query = ctx.query
    // console.log(ctx.rules)
    // ctx.request.body
    // ctx.body -> ctx.response.body
    // console.log('query',query)
    // console.log(ctx.get('cookie')) // 获取请求头中的值
    ctx.set('Foo', 'bar') // 设置响应头
    const newsList = [{ name: 'xiaobai' }]
    ctx.session.count = ctx.session.count ? ++ctx.session.count : 1
    console.log(ctx.session.count)
    // this.success(newsList)
    ctx.helper.success(ctx, newsList)
  }

  async test() {
    const { ctx } = this
    const result = await ctx.curl('https://www.baidu.com')
    ctx.body = result
  }
}

module.exports = NewsController