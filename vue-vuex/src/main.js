import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  data () {
    return {
      num: 1
    }
  },
  store,    // 将store  new Vue.$store 会在所有的组件中
  render: h => h(App)
}).$mount('#app')
