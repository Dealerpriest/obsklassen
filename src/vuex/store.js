import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './actions'
import * as mutations from './mutations'
import * as state from './state'
import * as getters from './getters'

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  strict: debug
  // plugins: debug ? [createLogger()] : []
})
