import * as glob from 'glob'
import * as Koa from 'koa'
import * as KoaRouter from 'koa-router'

type HTTPMethod = 'get' | 'put' | 'del' | 'post' | 'post'
type LoadOptions = {
    extname?: string
}
type RouteOptions = {
    prefix?: string;
    middlewares?: Array<Koa.Middleware>
}

const router = new KoaRouter()

const decorate = (method: HTTPMethod, path: String, options: RouteOptions = {}, router: KoaRouter) => {
    console.log('options', options)
    return (target, property) => {
        // 晚一拍
        // 确保先执行类装饰器
        process.nextTick(() => {
            // 添加中间件数组
            const middlewares = []

            // 这里target是实例
            if (target.middlewares) {
                middlewares.push(...target.middlewares)
            }


            if (options.middlewares) {
                middlewares.push(...options.middlewares)
            }

            // 再添加业务中间件
            middlewares.push(target[property])

            const url = options && options.prefix ? options.prefix + path : path
            router[method](url, ...middlewares) // 注册并且展开中间件数组
        })
    }
}

export const middlewares = function middlewares(middlewares: Koa.Middleware[]) {
    return function (target) {
        // 此处target为类
        target.prototype.middlewares = middlewares
    }
}

export const method = method => (path: string, options?: RouteOptions) => decorate(method, path, options, router)

export const get = method('get')
export const post = method('post')
export const put = method('put')
export const del = method('del')
export const patch = method('patch')

export const load = (folder: string, options: LoadOptions = {}): KoaRouter => {
    const extname = options.extname || '.{js,ts}'
    // glob.sync 同步执行
    glob.sync(require('path').join(folder, `./**/*${extname}`)).forEach(item => require(item)) // folder 下的无限层级目录以js 和 ts结尾的文件, 返回list，加载所获取的文件
    return router
}