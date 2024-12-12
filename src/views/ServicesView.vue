<script setup>
import web from '../assets/images/web.svg';
import mobile from '../assets/images/mobile.svg';
import network from '../assets/images/network.svg';

import figma from '../assets/images/figma.svg';
import xd from '../assets/images/xd.svg';
import sketch from '../assets/images/sketch.svg';


import html from '../assets/images/html.svg';
import java from '../assets/images/java.svg';
import php from '../assets/images/php.svg';

import flutter from '../assets/images/flutter.svg';
import swift from '../assets/images/swift.svg';
import android from '../assets/images/android.svg';
</script>

<template>

  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold">Services</h2>
    </div>

    <div class="grid gap-6 grid-cols-2 mb-10">
        <div class="col-span-1 px-20 flex flex-col justify-around">
          <h3 class="text-5xl font-bold text-[#2E2E2F]">Ui / Ux Designer</h3>
          <p class="text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
          <p class="text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
          <div class="flex flex-row justify-between">
            <img :src="figma" alt="logo">
            <img :src="xd" alt="logo">
            <img :src="sketch" alt="logo">
          </div>
        </div>
      <div class="col-span-1">
        <img :src="mobile" alt="UI/UX Design" class="rounded w-full">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="web" alt="UI/UX Design" class="rounded w-full">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-around">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">Web Development</h3>
        <p class="text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <div class="flex flex-row justify-between">
          <img :src="html" alt="logo">
          <img :src="java" alt="logo">
          <img :src="php" alt="logo">
        </div>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-around">
        <h3 class="text-5xl font-bold text-[#2E2E2F]">Mobile-Application</h3>
        <p class="text-2xl text-[#575757]">Our FirstWave support engineers are highly skilled and experienced in NMIS, Open-AudIT and all of our commercial products and helped customers from Telcos, MSP, enterprise organisations.</p>
        <p class="text-2xl text-[#575757]">We work closely with you during implementation and rollout, as well as post delivery of our solutions. </p>
        <div class="flex flex-row justify-between">
          <img :src="flutter" alt="logo">
          <img :src="swift" alt="logo">
          <img :src="android" alt="logo">
        </div>
      </div>
      <div class="col-span-1">
        <img :src="network" alt="UI/UX Design" class="rounded w-full">
      </div>
    </div>
  </section>

</template>

<style scoped>

</style>