import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@api/http.js'
Vue.use(elementUI)
Vue.use(vueAxios,axios)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
