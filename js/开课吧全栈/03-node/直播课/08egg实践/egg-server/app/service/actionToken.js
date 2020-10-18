const { Service } = require('egg')

class ActionService extends Service {
    constructor(ctx) {
        super(ctx)
    }

    async apply(_id) {
        const { ctx } = this
        // 加载了jwt插件，故而app中就有了jwt这个对象
        // 三个参数， 要加密的值， 加密过期时间， 密钥
        return ctx.app.jwt.sign({
            data: {
                _id
            },
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7
        }, ctx.app.config.jwt.secret)
    }
}

module.exports = ActionService