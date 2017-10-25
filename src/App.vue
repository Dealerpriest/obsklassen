<template>
  <div>

    <background-video v-show="isVideoActive"></background-video>
    
    <div id="site-container" class="container-fluid">
      <div id ="site-header" class="row">
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

      <!-- Loop through and render all sections -->
      <div v-for="section in menu" class="row">
        <div class="col-xs-12">
          <div class="section" :id="section.name" :style="randomColor">
            <component :is="section.name"></component>
          </div>
        </div>
      </div>

      
    </div>

  </div>
</template>

<script>
// import sorter from './components/sorter'
import backgroundVideo from './components/backgroundVideo'
import start from './components/start'
import gigs from './components/gigs'
import diskografi from './components/diskografi'
import texter from './components/texter'

export default {
  name: 'app',
  data () {
    return {
      menu: [
        {name: 'start', url: '/'},
        {name: 'gigs', url: '/gigs'},
        {name: 'diskografi', url: '/diskografi'},
        {name: 'texter', url: '/texter'}
      ]
    }
  },
  computed: {
    isVideoActive: function () {
      return this.$route.path === '/'
    },
    randomColor: function () {
      return {'background-color': 'rgb(' + Math.random(255) + ',' + Math.random(255) + ',' + Math.random(255) + ')'}
    }
  },
  components: {
    backgroundVideo,
    start,
    gigs,
    diskografi,
    texter
  }
}
</script>

<style src="./style.scss" lang="scss"></style>
<style>

.section {
  height: 100vh;
}

#site-container {
  position: relative;
  z-index: 1;
}

#site-header {
  /*background-color: black;*/
  /*opacity: 0.8;*/
}

#nav-menu {
  opacity: 1.0;
  max-width: 800px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  /*background-color: black;*/
}

.nav-link {
  font-size: 4rem;
  /*transform: rotate(6deg);*/
  color: white;
}

.nav-link:hover{
  color: white;
  transform: translateY(4px);
  text-decoration: none;
  /*text-transform: uppercase;*/
}
</style>