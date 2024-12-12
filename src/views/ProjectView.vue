<script setup>


import mobile from "@/assets/images/group-1.svg";
import web from "@/assets/images/group-2.svg";
import network from "@/assets/images/group-3.svg";
import Banner from "@/components/Banner.vue";

import appleStore from '../assets/images/apple-store.svg';
import googleStore from '../assets/images/google-store.svg';
import qrCode from '../assets/images/qr-ode.svg';
</script>

<template>
  <Banner/>
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold">Projects</h2>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-evenly">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">SGT Mobile App</h3>
        <p class="text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <h4 class="text-3xl font-semibold text-[#2E2E2F]">Download This App</h4>
        <div class="flex flex-row gap-8">
          <div class="flex flex-col justify-between">
            <img :src="appleStore" alt="logo">
            <img :src="googleStore" alt="logo">
          </div>
          <img :src="qrCode" alt="logo">
        </div>
      </div>
      <div class="col-span-1">
        <img :src="mobile" alt="UI/UX Design" class="rounded w-full">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="web" alt="UI/UX Design" class="rounded w-full">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-evenly">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">SGT Dashboard</h3>
        <p class="text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-evenly">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">SGT Judge App</h3>
        <p class="text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
      </div>
      <div class="col-span-1">
        <img :src="network" alt="UI/UX Design" class="rounded w-full">
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>