<script setup>


import mobile from "@/assets/images/group-1.svg";
import web from "@/assets/images/group-2.svg";
import network from "@/assets/images/group-3.svg";
import Banner from "@/components/Banner.vue";
import bannerImage from '@/assets/images/slider3.jpeg';
import appleStore from '../assets/images/apple-store.svg';
import googleStore from '../assets/images/google-store.svg';
import qrCode from '../assets/images/qr-ode.svg';

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
  <Banner :image="bannerImage" description="A comprehensive test management system that simplifies test planning, execution, and reporting for agile teams.  custom-built CRM platform to manage customer interactions and sales pipelines effectively.  A sleek, responsive e-commerce platform for selling electronic gadgets online."/>
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-black">Projects</h2>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-10 lg:px-20 flex flex-col justify-evenly order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">SGT Mobile App</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <h4 class="text-3xl font-semibold text-[#2E2E2F]">Download This App</h4>
        <div class="flex flex-row gap-8">
          <div class="flex flex-col justify-between">
            <img :src="appleStore" alt="logo">
            <img :src="googleStore" alt="logo">
          </div>
          <img :src="qrCode" alt="logo">
        </div>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="mobile" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="web" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-evenly">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">SGT Dashboard</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-evenly order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">SGT Judge App</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
      </div>
      <div class="col-span-1  order-first  md:order-last">
        <img :src="network" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="web" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-evenly">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">SVS</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-evenly order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">WFDP</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
      </div>
      <div class="col-span-1 order-first  md:order-last">
        <img :src="network" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-left">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>