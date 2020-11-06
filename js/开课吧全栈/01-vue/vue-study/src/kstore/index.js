import Vue from 'vue'
import Vuex from './kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doubleCount(state) {
            return state.count * 2
        }
    },
    mutations: {
        add(state) {
            state.count++
        }
    },
    actions: {
        // 解构上下文
        add({ commit }) {
            setTimeout(() => {
                commit('add')
            }, 1000)
        }
    },
    modules: {}
})
