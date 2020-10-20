module.exports = (option, app) => {
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      console.log('error', err)

      app.emit('error', err, this) // 记录日志

      const status = err.status || 500

      const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message

      ctx.body = {
        code: status,
        msg: error || '服务端出错'
      }

      if (status === 422) {
        ctx.body.detail = err.errors
      }
      ctx.status = 200
    } 
  }
}