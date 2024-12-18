<script setup>
import banner from '../assets/images/banner.png';
import construct from '../assets/images/construct.png';
defineProps({
  image: {
    default: banner,
    type: String
  }
})

</script>

<template>
  <section class="bg-white mb-20">
    <div class="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
      <!-- Text Content -->
      <div class=" md:text-left md:w-1/2 px-4 self-start mt-7">
        <h1 class="text-4xl sm:text-4xl md:text-[1.5rem] lg:text-[4.5rem] font-bold text-[#2E2E2F] md:leading-[1.5]">
          Revolutionary Digital <br />
          <span class="text-[#2E2E2F] font-bold flex flex-row items-center">
          Synergis <img :src="construct" class="max-w-40  md:max-w-40 lg:max-w-full"  alt="logo">
        </span>
        </h1>
        <p class="mt-4 text-[#2E3E5C]  md:text-[1.2rem] lg:text-[1.7rem]">
          Beyon Solutions Acquires Link Development: Creating a new horizon in
          digital transformation and innovation.
        </p>
      </div>

      <!-- Image Content -->
      <div class="w-full flex justify-center lg:w-1/3 lg:block">
          <!-- Image with circular green border -->
          <img :src="image" alt="Virtual Reality" class="w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover rounded-full "/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>