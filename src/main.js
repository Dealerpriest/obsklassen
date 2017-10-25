// import $ from 'jquery'

// ------------Vue Router Stuff
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// var vueScrollTo = require('vue-scrollTo');
import vueScrollTo from 'vue-scrollTo'
// Vue.use(vueScrollTo)

import App from './App'

// route components
// import start from 'components/start'
// import gigs from 'components/gigs'
// import diskografi from 'components/diskografi'
// import texter from 'components/texter'
import coverArt from 'components/coverArt'

const routes = [
  {name: 'start', path: '/'},
  {name: 'gigs', path: '/gigs'},
  { name: 'diskografi',
    path: '/diskografi',
    children: [
      {
        path: ':cover-id',
        components: {
          cover: coverArt
        }
      }
    ]
  },
  {name: 'texter', path: '/texter'}
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    console.log('scroll')
    var options = {
      easing: vueScrollTo.easing['ease-in']
    }

    vueScrollTo.scrollTo('#' + to.name, 500, options)

    // $('#' + to.name)
    // console.log(to.name)
    return false // {selector: '#' + to.name}
  }
})

// ----------Vuex Stuff
import * as store from './vuex/store'

/* eslint-disable no-new */
new Vue({
  router,
  // el: '#app',
  store,
  template: '<App/>',
  components: { App }
}).$mount('#app')
