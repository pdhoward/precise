import Vue from 'vue'
import App from './App.vue'
import router from './router.js'
import store from './store'
import './registerServiceWorker'
Vue.config.productionTip = false

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
