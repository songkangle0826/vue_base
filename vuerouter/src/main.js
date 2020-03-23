import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


new Vue({
  router,           // 为什么要在这里写一个router
  render: h => h(App)
}).$mount('#app')
