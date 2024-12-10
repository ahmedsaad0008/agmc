<script setup>
import banner from '../assets/images/banner.png';
import construct from '../assets/images/construct.png';
</script>

<template>
  <section class="bg-white">
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <!-- Text Content -->
      <div class="text-center md:text-left md:w-1/2 px-4 self-start mt-7">
        <h1 class="text-4xl md:text-[4.5rem] font-bold text-[#2E2E2F] md:leading-[1.5]">
          Revolutionary Digital <br />
          <span class="text-[#2E2E2F] font-bold flex flex-row">
          Synergis <img :src="construct">
        </span>
        </h1>
        <p class="mt-4 text-[#2E3E5C] text-[1.7rem]">
          Beyon Solutions Acquires Link Development: Creating a new horizon in
          digital transformation and innovation.
        </p>
      </div>

      <!-- Image Content -->
      <div class="">
          <!-- Image with circular green border -->
          <img :src="banner" alt="Virtual Reality" class="w-full"/>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>