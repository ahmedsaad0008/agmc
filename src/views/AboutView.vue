<template>
<!--  <Banner :image="bannerImage" description="At AGMC, we specialize in delivering cutting-edge software solutions tailored to your business needs. From mobile apps to web platforms, test management systems to graphic design, we bring your ideas to life with precision and creativity. Our team of expert developers and designers is committed to driving digital transformation and helping you achieve your goals."/>-->
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-6xl font-bold text-black">About Us</h2>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6 order-last md:order-first">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Developing Confident and Successful Learners</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black">Read More</button>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="about2" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="about3" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Enjoy Learning with a Unique Classroom Experience</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black">Read More</button>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6 order-last md:order-first">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Mobile Applications </h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black">Read More</button>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="about1" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto " data-aos="fade-left">
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
    once: true,
    mirror: false,
    delay: 0,
  })
})
</script>