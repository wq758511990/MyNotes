module.exports = (option, app) => {
    return async (ctx, next) => {
        try {
            await next()
        } catch (err) {
            console.log('error', err)
            // 触发error事件
            app.emit('error', err, this) // 记录日志

            const status = err.status || 500
            // 500 服务端错误
            // 判断环境，如果是生产环境，错误不能太具体
            const error = status === 500 && app.config.env === 'prod' ? 'Internal Server Error' : err.message

            ctx.body = {
                code: status,
                error
            }

            if (status === 422) {
                // 用户定义错误
                ctx.body.detail = err.errors
            }
            
            ctx.status = 200
        }
    }
}