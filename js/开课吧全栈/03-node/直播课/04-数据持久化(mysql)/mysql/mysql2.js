(async () => {
    const mysql = require('mysql2/promise')
    // 连接设置
    const  cfg = {
        host: 'localhost',
        user: 'admin',
        password: 'zixin3559',
        database: 'kaikeba'
    }

    const connection = await mysql.createConnection(cfg)

    let ret = await connection.execute(`
    CREATE TABLE IF NOT EXISTS test (
        id INT NOT NULL AUTO_INCREMENT,
        message varchar(45) NULL,
        PRIMARY KEY (id))`)
    console.log('create:', ret)
    
    // 插入数据要使用占位符，否则可能会发生sql注入攻击
    ret = await connection.execute(`
        INSERT INTO test(message) VALUES(?) 
    `, ['abc'])

    const [rows, fields] = await connection.execute(`
        select * from test
    `)
    console.log('select:', rows)
})()