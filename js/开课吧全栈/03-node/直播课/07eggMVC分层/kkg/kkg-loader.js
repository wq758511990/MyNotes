const fs =  require('fs')
const path = require('path')
const Router = require('koa-router')


// 读取指定目录文件
function load(dir, cb) {
    // 获取绝对路径
    const url = path.resolve(__dirname, dir)
    // 读取文件
    const files = fs.readdirSync(url)
    console.log('files', files)
    // 遍历文件夹
    files.forEach(filename => {
        filename = filename.replace('.js', '') // 去掉扩展名
        const file = require(url + '/' + filename)
        // 处理逻辑
        console.log('filename', filename)
        console.log('file', file)
        cb(filename, file)
    })
}

function initRouter(app) {
    const router = new Router()

    load('routes', (filename, routes) => {
        // index前缀处理
        const prefix = filename === 'index' ? '' : `/${filename}`

        // 路由类型判断
        routes = typeof routes === 'function' ? routes(app) : routes

        // 遍历添加路由
        Object.keys(routes).forEach(key => {
            const [method, path] = key.split(' ')
            console.log(`正在映射地址 ${method.toLocaleUpperCase()} ${prefix}${path}`)
            // 注册
            // router[method](prefix + path, routes[key])
            router[method](prefix + path, async ctx => {
                app.ctx = ctx
                await routes[key](app)
            })
        })
    })
    return router
}

function initController(app) {
    const controllers = {}
    // 读取目录
    load('controller', (filename, controller) => {
        controllers[filename] = controller(app)
    })
    return controllers
}


module.exports = {
    initRouter,
    initController
}