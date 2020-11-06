// 保存构造函数的引用，避免import
let Vue

class Store {
    constructor(options) {
        // 保存mutations
        this._mutations = options.mutations
        this._actions = options.actions
        this.state = new Vue({
            data: options.state
        })

        // 绑定commit、dispatch的上下文为store
        this.commit = this.commit.bind(this)
        this.dispatch = this.dispatch.bind(this)

        this._vm = new Vue({
            data: {
                // 两个$ Vue不做代理
                $$state: options.data
            }
        })
    }

    // store.state
    get state() {
        return this._vm._data.$$state
    }

    set state(v) {
        // 如果直接设置store.state
        // 警告
    }

    // type mutation类型
    // payload 载荷 参数
    commit(type, payload) {
        const entry = this._mutations[type]
        if (entry) {
            entry(this.state, payload)
        }
    }

    dispatch(type, payload) {
        const entry = this._actions[type]
        if (entry) {
            // 注意this错乱的问题
            entry(this, payload)
        }
    }
}

function install(_Vue) {
    Vue = _Vue

    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                console.log(this.$options)
                Vue.prototype.$store = this.$options.store
            }
        }
    })
}

//Vuex
// store是个插件 需要实现install方法
export default {
    Store,
    install
}
