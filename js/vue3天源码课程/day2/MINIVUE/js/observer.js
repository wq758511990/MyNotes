class Observer {
    constructor(data) {
        this.walk(data)
    }
    walk(data) {
        // 遍历data对象所有属性
        // 1、判断data是否是对象
        if (!data || typeof data !== 'object') {
            return
        }
        // 2、遍历data所有属性
        Object.keys(data).forEach((key) => {
            this.defineReactive(data, key, data[key])
        })
    }
    defineReactive(obj, key, val) {
        let that = this
        // 负责收集依赖并且发送通知
        let dep = new Dep()
        // 把对象中的属性也转换成响应式数据
        this.walk(val) 
        // 属性转换成setter、getter
        Object.defineProperty(obj, key, {
            enumerable: true,
            configurable: true,
            get() {
                // 收集依赖
                Dep.target && dep.addSub(Dep.target)
                // 这里用val而不用obj[key] 后者会出现问题，这也是需要传val进来的原因
                // 如果用obj[key] 就又会触发get， 则会递归
                // 用闭包扩展了val的作用域
                return val
            },
            set(newVal) {
                if (newVal === val) {
                    return
                }
                // 如果新的值也是个对象，给新的值也转换成响应式
                val = newVal
                that.walk(newVal)
                // 发送通知
                dep.notify()
            }
        })
    }
}