const crypto = require('crypto')
const jwt = require('jsonwebtoken');
const { PRIVATE_KEY } = require('./constant');
function md5(s) {
    // 注意参数需要为 String 类型，否则会出错
    return crypto.createHash('md5')
        .update(String(s)).digest('hex');
}

function decode(req) {
    const authorization = req.get('Authorization')
    let token = ''
    if(authorization.indexOf('Bearer') === 0) {
        token = authorization.replace('Bearer ', '')
    }
    return jwt.verify(token, PRIVATE_KEY)
}

module.exports = {
    md5,
    decode
}