import Vue from 'vue'
import { AxiosInstance } from 'axios'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

// vue实例扩展
declare module "vue/types/vue" {
  interface Vue {
    $axios: AxiosInstance
  }
}

// 扩展options
// declare module "vue/types/options" {
//   interface ComponentOptions<V extends Vue> {
//     router?: VueRouter,
//     store?: Store<any>
//   }
// }