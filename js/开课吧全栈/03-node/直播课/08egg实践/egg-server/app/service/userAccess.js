const { Service } = require('egg')

class UserAccessService extends Service {
    constructor(ctx) {
        super(ctx)
    }

    async login(payload) {
        const { ctx, service } = this
        const user = await service.user.findByMobile(payload.mobile)
        if (!user) {
            ctx.throw(404, 'user not found')
        }
        let verifyPwd = await ctx.compare(payload.password, user.password)
        if (!verifyPwd) {
            ctx.throw(404, 'user password is error')
        }
        return {
            token: await service.actionToken.apply(user._id)
        }
    }

    async logout() {

    }

    async current() {
        const { ctx, service } = this
        const _id = ctx.state.user.data._id // 通过后会产生state.user
        const user = await service.user.find(_id)
        if (!user) {
            ctx.throw(404, 'user is not found')
        }
        user.password = '' // 不能把password返回给前端
        return user
    }
}

module.exports = UserAccessService