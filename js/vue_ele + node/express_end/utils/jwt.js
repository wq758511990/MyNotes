const jwt = require('express-jwt')
const { PRIVATE_KEY } = require('./constant')

// 用jwt生成token
const jwtAuth = jwt({
    secret: PRIVATE_KEY, // 私人密钥
    credentialsRequired: true, // 是否开启验证
    algorithms: ['HS256']
}).unless({
    path: [ // 白名单
        '/',
        '/user/login'
    ]
})

module.exports = {
    jwtAuth
}
