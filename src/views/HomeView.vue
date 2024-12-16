<script setup>
import Banner from "@/components/Banner.vue";
import Carsoual from "@/components/Carsoual.vue";
import points from '../assets/images/points.svg';
import icRoundRestaurant from '../assets/images/ic_round-restaurant.svg';
import image4 from '../assets/images/image _4.png';
import image5 from '../assets/images/image_5.png';
import image6 from '../assets/images/image_6.png';
import image7 from '../assets/images/image_7.png';
import image8 from '../assets/images/image_8.png';

import cardano from '../assets/images/cardano.svg';
import cloudConnection from '../assets/images/cloud-connection.svg';
import monitorMobile from '../assets/images/monitor-mobbile.svg';
import oceanProtocol from '../assets/images/ocean-protocol.svg';
import bannerImage from '../assets/images/banner-image.jpg';

import google from '../assets/images/google.svg';
import airbnt from '../assets/images/airbnt.svg';
import creative from '../assets/images/creative.svg';
import shopify from '../assets/images/shopify.svg';
import amazon from '../assets/images/amazon.svg';
import iframeModal from '../components/Iframe.vue';
import {ref} from "vue";
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import AOS from 'aos';
import {onMounted} from "vue";
onMounted(() => {
  AOS.init({
    duration: 900,
    offset: 100,
    easing: "ease-in-out",
    once: false,
  })
})

const images = ref([
  google,
  airbnt,
  creative,
  shopify,
  amazon,
]);

const isModalOpen = ref(false);

const url = ref(null)

function openModal(e,u){
  url.value = u;
  isModalOpen.value = true;
}
</script>

<template>
  <main>
    <Banner/>
    <div class="bg-[#f4f4f4] text-[#2E3E5C]">
      <div class="container mx-auto p-6">
        <!-- Header Section -->
        <div class="text-center mb-10">
          <h2 class="text-[1.5rem] md:text-[2rem] lg:text-[4.5rem] font-bold flex flex-row justify-center"><img :src="points" class="max-w-16 md:max-w-16 lg:max-w-full" alt="">We Deliver Digital Productivity</h2>
          <h4 class="text-[#2E3E5C] mt-2 text-center text-2xl max-w-[70%] mx-auto">
            We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers, and partners.
          </h4>
        </div>

        <!-- Highlights Section -->
        <div class="text-center">
          <h2 class="text-[2rem] mb-6 text-[#374754] font-bold">Highlights</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">600</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Employees</p>
              <p class="text-[#374754] text-start text-[1rem]">Total number of employees within the organization</p>
            </div>
            <!-- Card 3 -->
            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">20</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Global Offices</p>
              <p class="text-[#374754] text-start text-[1rem]">Total number of offices around the world</p>
            </div>
            <!-- Card 4 -->
            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">100</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Partenrs</p>
              <p class="text-[#374754] text-start text-[1rem]">Number of contracted partners</p>
            </div>

            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">10</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Countries</p>
              <p class="text-[#374754] text-start text-[1rem]">Number of contracted partners</p>
            </div>
          </div>
        </div>

        <!-- Contact Us Button -->
        <div class="flex flex-row justify-center items-center">
          <div class="w-full flex justify-center">
            <button class="btn bg-[#6CBF8B] hover:bg-[#6CBF8B] ms-[10%] px-8 py-3 text-black">Contact Us</button>
          </div>
          <img :src="points" class="max-w-16 md:max-w-16 lg:max-w-full" alt="">
        </div>
      </div>
    </div>

    <div  class="bg-white py-4">
      <div class="container mx-auto">
        <h1 class="text-[#2E2E2F] text-[3rem] font-bold">Latest Picks</h1>
        <p class="text-[#2E3E5C] text-[1.5rem] font-bold">Check Our Latest New , Event , webners And More.</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 mt-3">
          <div class="col-span-1 px-4" data-aos="fade-up">
            <img :src="image4" class="h-3/4 w-full rounded-[16px]">
            <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
            <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
          </div>
          <div class="col-span-1 grid grid-cols-1 md:grid-cols-2 items-center">
            <div class="col-span-1">
              <img :src="image5" class="rounded-[16px]" data-aos="fade-up">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
            <div class="col-span-1">
              <img :src="image6" class="rounded-[16px]" data-aos="fade-up">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
            <div class="col-span-1">
              <img :src="image7" class="rounded-[16px]" data-aos="fade-up">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
            <div class="col-span-1">
              <img :src="image8" class="rounded-[16px]" data-aos="fade-up">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="text-gray-800">
    <div class="container mx-auto p-8">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h1 class="text-6xl font-bold">Inspiring Solution</h1>
        <p class="text-gray-600 mt-4 text-xl leading-relaxed">
          When services simply work, we choose to approach digital needs from a partner perspective.
          A partner that delivers inspiring solutions. We consult, design, develop, implement, and manage integrated technology solutions.
          Whether on cloud, on-premises, or using a hybrid model, we help you drive measurable productivity in your business.
          We start with you from scratch; from ideation and conceptualization to implementation of transformative solutions.
        </p>
      </div>

      <!-- Features Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Feature 1 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
          <div class="mb-4">
            <img :src="cardano" alt="Mobile Icon" class="mx-auto">
          </div>
          <h3 class="text-xl font-semibold">Mobile Applications Development</h3>
          <p class="text-gray-500 mt-3">
            Native mobile application is a smartphone application written in a specific programming language such as Objective C for iOS or Java for Android.
          </p>
          </div>
          <button class="px-6 py-2 mt-6 border bg-[#2E2E2F1A] text-[#2E2E2F] font-medium rounded-lg w-fit">
            View More
          </button>

        </div>
        <!-- Feature 2 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
            <div class="mb-4">
              <img :src="monitorMobile" alt="Web Icon" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold">Web Development</h3>
            <p class="text-gray-500 mt-3">
              Web development is the process of building, programming, and maintaining websites and web applications. Website developers use various programming tools.
            </p>
          </div>
          <button class="px-6 py-2 border bg-[#2E2E2F1A] text-[#2E2E2F] font-medium rounded-lg w-fit">
            View More
          </button>
        </div>
        <!-- Feature 3 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
          <div class="mb-4">
            <img :src="cloudConnection" alt="Cloud Icon" class="mx-auto">
          </div>
          <h3 class="text-xl font-semibold">Save Information in the Cloud</h3>
          <p class="text-gray-500 mt-3">
            To use Cloud Storage, you'll first create a bucket, a basic container that holds your data in Cloud Storage.
          </p>
          </div>
          <button class="px-6 py-2 border bg-[#2E2E2F1A] text-[#2E2E2F] font-medium rounded-lg w-fit">
            View More
          </button>
        </div>
        <!-- Feature 4 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
            <div class="mb-4">
              <img :src="oceanProtocol" alt="Power Apps Icon" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold">Form On-Prem Dynamics to Power Apps</h3>
            <p class="text-gray-500 mt-3">
              Connect your Dynamics 365 on-premises environment to the world of Power Apps using our OPS (On-Premises Connectors) solutions.
            </p>
          </div>
          <button class="px-6 py-2 border bg-[#2E2E2F1A] text-[#2E2E2F] font-medium rounded-lg  w-fit">
            View More
          </button>
        </div>
      </div>
    </div>
    </div>

    <Carsoual/>

    <div class="text-gray-800">
      <div class="container mx-auto p-8">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold">Products & Plateforms</h1>
          <p class="text-[#374754] mt-4 text-3xl leading-relaxed">
            Transform your business experience. Our products and platforms are fast-to-deploy, open-to-customize and work on-cloud, on-prem and in hybrid models
          </p>
        </div>
      </div>
      <Carousel :items-to-show="1"
                :autoplay="true"
                :transition="4000"
                wrap-around
                pause-autoplay-on-hover>
        <Slide>
        <div class="relative w-full">
          <img :src="bannerImage" class="w-full" alt="banner">
          <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-16334&p=f&t=ya83jJhXV8G29ytA-0&scaling=min-zoom&content-scaling=fixed&page-id=94%3A2313&starting-point-node-id=94%3A16360')">
            <h1 class="text-sm md:text-6xl font-bold text-white">SGT User App</h1>
            <p class="text-white mt-6 text-sm md:text-5xl leading-relaxed">
              Drive business transformation with the power of Microsoft Dynamics 365.
            </p>
          </div>
        </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-19126&p=f&t=3Hhlx0QkdrwPQ2rF-0&scaling=min-zoom&content-scaling=fixed&page-id=94%3A2312&starting-point-node-id=94%3A19148')">
              <h1 class="text-sm md:text-6xl font-bold text-white">SGT Judge App</h1>
              <p class="text-white mt-6 text-sm md:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-7402&p=f&t=3Hhlx0QkdrwPQ2rF-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1')">
              <h1 class="text-sm md:text-6xl font-bold text-white">SGT Dashboard</h1>
              <p class="text-white mt-6 text-sm md:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/IIq1ISVigF5ruOUTsCT1Np/wfdp-wallet?node-id=44-2260&p=f&t=GFpvOuG3OXXZ8C32-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=80%3A1616')">
              <h1 class="text-sm md:text-6xl font-bold text-white">WFDP Wallet</h1>
              <p class="text-white mt-6 text-sm md:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/IIq1ISVigF5ruOUTsCT1Np/wfdp-wallet?node-id=44-2260&p=f&t=GFpvOuG3OXXZ8C32-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=80%3A1616')">
              <h1 class="text-sm md:text-6xl font-bold text-white">WFDP Wallet</h1>
              <p class="text-white mt-6 text-sm md:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>

    <div class="container mx-auto py-24">
      <h4 class="text-center mb-12 text-[#2E2E2F] font-bold text-xl">Support Company</h4>
      <div class="grid grid-cols-2 md:grid-cols-5 items-center gap-6 md:gap-0">
        <div class="col-span-1 w-fit mx-auto" v-for="(im,i) in images" :key="i">
          <img :src="im" alt="logo">
        </div>
      </div>
    </div>

  </main>

  <iframeModal
      :isOpen="isModalOpen"
      :url="'https://www.figma.com/embed?embed_host=share&url='+url"
      title="Example Iframe"
      @close="isModalOpen = false"
  />
</template>
