const net = require('net')
const chatServer = net.createServer()
const clientList = []
chatServer.on('connection', client => {
    // 连接后，client为对应客户端
    client.write('Hi\n')
    clientList.push(client)
    client.on('data', data => {
        // client 发数据的回调
        // 传输 data为二进制，需要toString()转换
        console.log('receive data : ' + data.toString())
        clientList.forEach((client) => {
            client.write(data)
        })
    })

})

chatServer.listen(8878)