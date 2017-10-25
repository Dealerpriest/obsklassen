<template>
  <div class="container-fluid diskografi">
    <div class="row">
      <div class="col-md-3">
        <router-link v-if="previous != -1" :to="previous">
          <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"><span>
        </router-link>
      </div>
      
      <div class="col-md-6">
        <p>{{covers[currentCover].title}}</p>
        <router-view name="cover"></router-view>
        <!-- <cover-art></cover-art> -->
      </div>

      <div class="col-md-3">
        <router-link v-if="next != -1" :to="next">
          <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'diskografi',
  methods: {
  },
  data () {
    return {
      currentCover: 0,
      covers: [
        {title: 'Din Future Boss'},
        {title: 'Du kommer aldrig undan'},
        {title: 'Dö själv och låt andra leva'},
        {title: 'Pärlplattor för Svin'}
      ]
    }
  },
  computed: {
    next: function () {
      if (this.currentCover >= (this.covers.length - 1)) {
        return '-1'
      }
      return (this.currentCover + 1).toString()
    },
    previous: function () {
      if (this.currentCover <= 0) {
        return '-1'
      }
      return (this.currentCover - 1).toString()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
