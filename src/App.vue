<template>
  <div>

    <background-video v-show="isVideoActive"></background-video>
    
    <div id="site-container" class="container-fluid">
      <div class="row">
        <div id="nav-menu">
          <template v-for="menuItem in menu">
            <router-link :to="menuItem.url" class="nav-link">{{menuItem.name}} </router-link>
          </template>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12">
          <router-view></router-view>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import sorter from './components/sorter'
import backgroundVideo from './components/backgroundVideo'

export default {
  name: 'app',
  data () {
    return {
      menu: [
        {name: 'Start', url: '/'},
        {name: 'Gigs', url: '/gigs'},
        {name: 'Diskografi', url: '/diskografi'}
      ]
    }
  },
  computed: {
    isVideoActive: function () {
      return this.$route.path === '/'
    }
  },
  components: {
    backgroundVideo
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
<style>

#site-container {
  position: relative;
  z-index: 1;
}

#nav-menu {
  text-align: center;
}

.nav-link {
  font-family: 'arial';
  font-size: 3rem;
}
</style>