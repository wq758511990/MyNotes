const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile) // 这样得到的readFile 就是个promise
// 同步读取
// const data = fs.readFileSync('./config.js')
// data本身是个二进制
// data.toString()转换为字符串
// console.log(data.toString())

// eventLoop , 异步方法会被放在队列中，然后继续执行同步，异步方法执行完成之后才会弹出队列

// 异步方法(node默认异步最后一个参数是个回调方法，并且回调方法第一个参数是错误信息，第二个是返回数据)
// fs.readFile('./config.js', (err, data) => {
//     if (err) throw err
//     console.log('data', data.toString())
// })
// 这样会先打印321
// console.log('321')

process.nextTick(async () => {
    const data = await readFile('./config.js')
    console.log('data', data.toString())
})