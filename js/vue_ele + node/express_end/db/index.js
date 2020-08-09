const mysql = require('mysql')
const config = require('./config')

function connect() {
    return mysql.createConnection({
        ...config,
        multipleStatements: true
    })
}

function querySql(sql) {
    const conn = connect()
    return new Promise((resolve, reject) => {
        try {
            conn.query(sql, (err, results) => {
                if (err) { reject(err) }
                else { resolve(results) }
            })
        } catch (e) {
            reject(e)
        } finally {
            conn.end()
        }
    })
}

function queryOne(sql) {
    return new Promise((resolve, reject) => {
        querySql(sql)
            .then(data => {
                if (data && data.length > 0) {
                    resolve(data[0])
                } else {
                    resolve()
                } 
            })
            .catch(e => {
                reject(e)
            })
    })
}

module.exports = {
    querySql,
    queryOne
}