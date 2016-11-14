<template>
  <div id="app" class="row">
    <div class="col-md-3">
      <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"><span>
    </div>
    
    <div class="col-md-6">
      <div class="row">
        <div v-for="menuItem in menu">
          <router-link :to="menuItem.url">{{menuItem.name}} </router-link>
        </div>
      </div>
      <router-view></router-view>
      <!-- <img src="./assets/logo.png"> -->
      <!-- <sorter></sorter> -->
    </div>

    <div class="col-md-3">
      <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    </div>
  </div>
</template>

<script>
import sorter from './components/sorter'

export default {
  name: 'app',
  data () {
    return {
      menu: [
        {name: 'Gigs', url: '/gigs'},
        {name: 'Diskografi', url: '/diskografi'}
      ]
    }
  },
  components: {
    sorter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
