import Vue from 'vue'
import VueResource from 'vue-resource'

import App from './App'
import router from './routers'

Vue.use(VueResource)

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
