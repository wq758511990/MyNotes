class Vue {
    constructor(options) {
        // 1、通过属性保存选项的数据
        this.$options = options || {}
        this.$data = options.data || {}
        this.$el = typeof options.el === 'string' ? document.querySelector(options.el) : options.el
        // 2、把data中的成员转换成getter和setter，注入到vue实例中
        this._proxyData(this.$data)
        // 3、用observer对象监听数据的变化
        new Observer(this.$data)
        // 4、调用compiler对象，解析指令和差值表达式
        new Compiler(this)
    }
    _proxyData(data) {
        // 遍历data中的所有属性
        Object.keys(data).forEach((key) => {
            // 这里注意要用箭头函数，如果用fucntion， 则this指向window
            // 把data中的属性注入到vue实例中
            Object.defineProperty(this, key, {
                configurable: true,
                enumerable: true,
                get() {
                    return data[key]
                },
                set(newVal) {
                    if (data[key] === newVal) {
                        return
                    }
                    data[key] = newVal
                }
            })
        })
    }
}