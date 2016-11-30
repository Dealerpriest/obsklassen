<template>
  <div class="diskografi">
    <div class="row">
      <div class="col-md-3">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"><span>
      </div>
      
      <div class="col-md-6">
        <cover-art></cover-art>
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
      covers: []
    }
  },
  computed: {
    next: function () {
      if (this.currentCover >= (this.covers.length - 1)) {
        return -1
      }
      return this.currentCover + 1
    },
    previous: function () {
      if (this.currentCover <= 0) {
        return -1
      }
      return this.currentCover - 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
