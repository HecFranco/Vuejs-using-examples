import Vue from 'vue'
import App from './App.vue'
// Vuex - store
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
