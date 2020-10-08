const fs = require('fs')
const rs = fs.createReadStream('./01.jpg') // 创建一个读取流
const ws = fs.createWriteStream('./02.jpg') // 创建一个写流
rs.pipe(ws)