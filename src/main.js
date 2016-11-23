import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App'

// route components
import start from 'components/start'
import gigs from 'components/gigs'
import diskografi from 'components/diskografi'

const routes = [
    {path: '/', component: start},
    {path: '/gigs', component: gigs},
    {path: '/diskografi', component: diskografi}
]

const router = new VueRouter({routes})

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
