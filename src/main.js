import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './mock'
import scrollRow from './components/common/scroll-row.vue'
import scroll from './components/common/scroll.vue'
Vue.component('scroll-row',scrollRow);
Vue.component('scroll',scroll);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')