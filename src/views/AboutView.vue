<template>
  <Banner :image="bannerImage"/>
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-black">About Us</h2>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">Developing Confident and Successful Learners</h3>
        <p class="text-2xl text-[#575757]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
        <button class="btn bg-[#6CBF8B] hover:bg-[#6CBF8B] px-8 py-3 w-fit text-black">Read More</button>
      </div>
      <div class="col-span-1">
        <img :src="about2" alt="UI/UX Design" class="rounded w-full" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="about3" alt="UI/UX Design" class="rounded w-full" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">Enjoy Learning with a Unique Classroom Experience</h3>
        <p class="text-2xl text-[#575757]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
        <button class="btn bg-[#6CBF8B] hover:bg-[#6CBF8B] px-8 py-3 w-fit text-black">Read More</button>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">Mobile Applications </h3>
        <p class="text-2xl text-[#575757]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
        <button class="btn bg-[#6CBF8B] hover:bg-[#6CBF8B] px-8 py-3 w-fit text-black">Read More</button>
      </div>
      <div class="col-span-1">
        <img :src="about1" alt="UI/UX Design" class="rounded w-full" data-aos="fade-left">
      </div>
    </div>
  </section>
</template>

<style>

</style>
<script setup >
import about1 from '../assets/images/about-1.svg';
import about2 from '../assets/images/about-2.svg';
import about3 from '../assets/images/about-3.svg';
import Banner from "@/components/Banner.vue";
import AOS from 'aos';
import bannerImage from '@/assets/images/slider1.jpeg'
import {onMounted} from "vue";
onMounted(() => {
  AOS.init({
    duration: 900,
    offset: 100,
    easing: "ease-in-out",
    once: false,
  })
})
</script>