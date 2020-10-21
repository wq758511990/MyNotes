const cluster = require('cluster') // 内置
const os = require('os')
const numCPUs = os.cpus().length

const process = require('process')
const workers = {}

console.log('numCPUS', numCPUs)

if (cluster.isMaster) {
    cluster.on('exit', (worker, code, signal) => {
        console.log('工作进程崩溃...重启')
        // 删除
        delete workers[worker.process.pid]
        // 复制重启 
        worker = cluster.fork()
        workers[worker.process.pid] = worker
    })
    // 是否是主进程
    for (let i = 0; i < numCPUs; i++) {
        let worker = cluster.fork() // 复制进程
        console.log('init ...pid', worker.process.pid)
        workers[worker.process.pid] = worker
    }
} else {
    // 子进程
    const app = require('./app')
    app.listen(3000)
}
// 当主进程被终止时，关闭所有工作进程
process.on('SIGTERM', function () {
    for (var pid in workers) {
        process.kill(pid);
    }
    process.exit(0);
});
require('./test')