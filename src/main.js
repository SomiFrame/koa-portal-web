import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axiosInstance from '@/util/axios'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'

Vue.prototype.axios=axiosInstance
Vue.config.productionTip = false
Vue.use(VueMaterial)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
