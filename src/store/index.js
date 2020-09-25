import Vue from 'vue'
import Vuex from 'vuex'
import entries from './home/entries'
import filter from './home/filter'
import goods from './home/goods'
import details from './home/details'
import rate from './home/rate'
import order from './order/order'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    entries,
    filter,
    goods,
    details,
    rate,
    order
  }
})