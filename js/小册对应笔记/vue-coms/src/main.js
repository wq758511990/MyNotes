import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Alert from './components/alert/alert.js'
import './assets/reset.scss'

Vue.config.productionTip = false
Vue.prototype.$Alert = Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
