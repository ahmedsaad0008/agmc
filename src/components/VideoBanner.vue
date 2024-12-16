<template>
  <div class="relative w-full h-[60vh] lg:h-[80vh] overflow-hidden">
    <!-- Video Background -->
    <video
        class="absolute top-0 left-0 w-full h-full object-cover"
        autoplay
        muted
        loop
        playsinline
    >
      <source src="@/assets/videos/banner-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Content Overlay -->
    <div
        class="relative z-10 flex items-center justify-center h-full bg-black/50 text-white text-center px-6"
    >
<!--      <div>-->
<!--        <h1 class="text-4xl lg:text-6xl font-bold mb-4">-->
<!--          Welcome to Our Website-->
<!--        </h1>-->
<!--        <p class="text-lg lg:text-2xl mb-6">-->
<!--          Experience stunning visuals with our video banner.-->
<!--        </p>-->
<!--        <button class="btn btn-primary">-->
<!--          Learn More-->
<!--        </button>-->
<!--      </div>-->
    </div>

    <!-- Optional Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-0"></div>
  </div>
</template>

<script setup>

</script>

<style scoped>
/* Additional styles, if necessary */
</style>
