const { querySql, queryOne } = require('../db/index')

function login(username, password) {
    return querySql(`select * from user where username = '${username}' and password = '${password}'`)
    // return querySql(`select * from user`)
}

function selectUser(username) {
    return queryOne(`select id, username, role, nickname, avatar from user where username = '${username}'`)
}

module.exports = {
    login,
    selectUser
}