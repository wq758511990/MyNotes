// 框架会把 app/extend/helper.js 中定义的对象与内置 helper 的 prototype 对象进行合并
module.exports = {
  success: (ctx, data = null, msg = '请求成功') => {
    ctx.body = {
      code: 0,
      data,
      msg
    }
    ctx.status = 200
  }
}