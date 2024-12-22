<script setup>


import mobile from "@/assets/images/group-1.svg";
import web from "@/assets/images/group-2.svg";
import network from "@/assets/images/group-3.svg";
import Banner from "@/components/Banner.vue";
import bannerImage from '@/assets/images/slider3.jpeg';
import appleStore from '../assets/images/apple-store.svg';
import googleStore from '../assets/images/google-store.svg';
import qrCode from '../assets/images/qr-ode.svg';
import iframeModal from '../components/Iframe.vue';

import AOS from 'aos';
import {onMounted, ref} from "vue";
import construct from "@/assets/images/construct.png";
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


const isModalOpen = ref(false);

const url = ref(null)

function openModal(e,u){
  url.value = u;
  isModalOpen.value = true;
}
</script>

<template>
  <section class="bg-white mb-20">
    <div class="container mx-auto">
      <!-- Text Content -->
      <div class=" text-center w-full px-4 mt-7">
        <h1 class="text-4xl sm:text-4xl md:text-[1.5rem] lg:text-[4.5rem] font-bold text-[#2E2E2F] md:leading-[1.5]">
          Projects
        </h1>
        <p class="mt-4 text-[#2E3E5C]  md:text-[1.2rem] lg:text-[1.7rem]">
          A comprehensive test management system that simplifies test planning, execution, and reporting for agile teams.  custom-built CRM platform to manage customer interactions and sales pipelines effectively.  A sleek, responsive e-commerce platform for selling electronic gadgets online.
        </p>
      </div>
    </div>
  </section>
  <section class="container mx-auto pb-10">
<!--    <div class="text-center mb-10">-->
<!--      <h2 class="text-4xl font-bold text-black">Projects</h2>-->
<!--    </div>-->

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-10 lg:px-20 flex flex-col justify-evenly order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">SGT Mobile App</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-16334&p=f&t=ya83jJhXV8G29ytA-0&scaling=min-zoom&content-scaling=fixed&page-id=94%3A2313&starting-point-node-id=94%3A16360')">View</button>
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
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-7402&p=f&t=3Hhlx0QkdrwPQ2rF-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1')">View</button>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-evenly order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">SGT Judge App</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black"@click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-19126&p=f&t=3Hhlx0QkdrwPQ2rF-0&scaling=min-zoom&content-scaling=fixed&page-id=94%3A2312&starting-point-node-id=94%3A19148')">View</button>
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
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black" @click="openModal($event,'https://www.figma.com/proto/IIq1ISVigF5ruOUTsCT1Np/wfdp-wallet?node-id=44-2260&p=f&t=GFpvOuG3OXXZ8C32-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=80%3A1616')">View</button>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-evenly order-last md:order-first gap-4 lg:gap-0">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">WFDP</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-sm lg:text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black" @click="openModal($event,'https://www.figma.com/proto/28qNcUatVXDdGoQN29hSse/WFDP?node-id=1-282&p=f&t=QSErSm00I76vXcoB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A282')">View</button>
      </div>
      <div class="col-span-1 order-first  md:order-last">
        <img :src="network" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-left">
      </div>
    </div>
  </section>

  <iframeModal
      :isOpen="isModalOpen"
      :url="'https://www.figma.com/embed?embed_host=share&url='+url"
      title="Example Iframe"
      @close="isModalOpen = false"
  />
</template>

<style scoped>

</style>