// 实现一个插件挂载$router
let Vue;
class KVueRouter {
    constructor(options) {
        this.$options = options
        // 需要创建响应式的current属性(可以收集依赖)
        Vue.util.defineReactive(this, 'current', '/')

        window.addEventListener('hashchange', () => {
            // 监听
            this.current = window.location.hash.slice(1)
        })

        window.addEventListener('load', () => {
        })

    }

    onHashChange() {

    }
}

KVueRouter.install = function (_Vue) {
    // 保存构造函数，在KVueRouter使用
    Vue = _Vue

    //如何获取根实例中的router？
    // mixin!
    Vue.mixin({
        beforeCreate() {
            console.log(this)
            if (this.$options.router) {
                // 根实例
                Vue.prototype.$router = this.$options.router
            }
        },
    })

    Vue.component('router-link', {
        props: {
            to: {
                type: String,
                reuqired: true
            }
        },
        render(h) {
            h('a', { attrs: { href: this.to } }, this.$slots.default)
        }
    })
    Vue.component('router-view', {
        render(h) {
            let component = null
            // 获取path对应的component
            this.$router.$routes.forEach(route => {
                if (route.path === this.$router.current) {
                    component = route.component
                }
            })
            return h(component)
        }
    })
}

export default KVueRouter