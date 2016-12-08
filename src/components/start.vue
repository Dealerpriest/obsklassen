<template>
  <div>
    <div id="logo-container">
      <img id="obslogo" src="../assets/obslogo.png">
    </div>
    <facebook-feed></facebook-feed>
  </div>
</template>



<script>
import facebookFeed from 'components/facebookFeed'
export default {
  name: 'start',
  methods: {
  },
  data () {
    return {
    }
  },
  components: {
    facebookFeed
  }
}
</script>

<style>
#logo-container {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
}

#obslogo {
  /*width: 100%;*/
  /*text-align: center;*/
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  /*margin: auto;*/
  position: absolute;
  /*z-index: 2;*/
}
</style>