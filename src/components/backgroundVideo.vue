<template>
	<div class="video-container">
	  <video id="background-video" preload loop autoplay muted>
	    <source src="/static/test.mp4" type="video/mp4">
	    <!-- <source src="./assets/obslogo.png" type="video/mp4"> -->
	    <!-- <source src="https://www.bigcartel.com/videos/bgvid-1280x720-rf25-d0e7eb9e.mp4v?" /> -->
	  </video>
	</div>
</template>

<style>

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /*z-index: -1;*/
}

#background-video {
  opacity: 0.5;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height:auto;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
}

</style>