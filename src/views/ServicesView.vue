<script setup>
import web from '../assets/images/web.svg';
import mobile from '../assets/images/mobile.svg';
import network from '../assets/images/network.svg';

import figma from '../assets/images/figma.svg';
import xd from '../assets/images/xd.svg';
import sketch from '../assets/images/sketch.svg';
import bannerImage from '@/assets/images/slider5.jpeg';

import html from '../assets/images/html.svg';
import java from '../assets/images/java.svg';
import php from '../assets/images/php.svg';

import flutter from '../assets/images/flutter.svg';
import swift from '../assets/images/swift.svg';
import android from '../assets/images/android.svg';
import Banner from "@/components/Banner.vue";

import AOS from 'aos';
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

<template>

  <section class="bg-white mb-20" id="header-section">
    <div class="container mx-auto">
      <!-- Text Content -->
      <div class=" text-center w-full px-4 mt-7">
        <h1 class="text-4xl sm:text-4xl md:text-[1.5rem] lg:text-[4.5rem] font-bold text-white md:leading-[1.5]">
          Services
        </h1>
        <p class="mt-4 text-white  md:text-[1.2rem] lg:text-[1.7rem]">
          Software Development: Custom software solutions to streamline your business operations.Test Management Systems: Robust platforms to enhance quality assurance and testing efficiency.Mobile App Development: Intuitive, cross-platform mobile apps to engage your users.Website Development: Modern, responsive websites that captivate and convert. Graphic Design: Stunning visuals and creative branding to make your business stand out.
        </p>
      </div>
    </div>
  </section>
  <section class="container mx-auto pb-10">
<!--    <div class="text-center mb-10">-->
<!--      <h2 class="text-4xl font-bold text-black">Services</h2>-->
<!--    </div>-->

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
        <div class="col-span-1 px-10 lg:px-20 flex flex-col justify-around order-last md:order-first gap-4 lg:gap-0">
          <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">UI / UX Designer</h3>
          <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
          <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
          <div class="flex flex-row justify-between gap-2 lg:gap-0">
            <img :src="figma" alt="logo">
            <img :src="xd" alt="logo">
            <img :src="sketch" alt="logo">
          </div>
        </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="mobile" alt="UI/UX Design" class="rounded w-3/4 mx-auto lg:w-full" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 sm:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="web" alt="UI/UX Design" class="rounded  mx-auto w-3/4 lg:w-full" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-10 lg:px-20 flex flex-col justify-around gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Web Development</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <div class="flex flex-row lg:flex-row justify-between gap-2 lg:gap-0">
          <img :src="html" alt="logo">
          <img :src="java" alt="logo">
          <img :src="php" alt="logo">
        </div>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-10 lg:px-20 flex flex-col justify-around order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Mobile-Application</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <div class="flex flex-row lg:flex-row justify-between gap-2 lg:gap-0">
          <img :src="flutter" alt="logo">
          <img :src="swift" alt="logo">
          <img :src="android" alt="logo">
        </div>
      </div>
      <div class="col-span-1 order-first  md:order-last">
        <img :src="network" alt="UI/UX Design" class="rounded w-3/4 mx-auto lg:w-full" data-aos="fade-left">
      </div>
    </div>
  </section>

</template>

<style scoped>
#header-section{
  background-image: url("@/assets/images/softwaree.jpg");
  background-size: cover;
  padding: 100px 0px;
  background-repeat: no-repeat;
}
</style>