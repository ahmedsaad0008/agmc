<script setup>
import Banner from "@/components/Banner.vue";
import Carsoual from "@/components/Carsoual.vue";
import points from '../assets/images/points.svg';
import icRoundRestaurant from '../assets/images/ic_round-restaurant.svg';
import image4 from '../assets/images/image _4.png';
import image5 from '../assets/images/news1.jpeg';
import image6 from '../assets/images/news2.jpeg';
import image7 from '../assets/images/news3.jpeg';
import image8 from '../assets/images/news4.jpeg';
import sliderImage from  '@//assets/images/slider3.jpeg';
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
import VideoBanner from "@/components/VideoBanner.vue";
import router from "@/router/index.js";
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
    <Banner :image="sliderImage" description="Empowering Businesses with Smarter Software Solutions, Seamless Mobile Apps, Stunning Websites, and Creative Designs. All in One Place. Where Innovation Meets Excellence. Building the Future of Software, Mobile Apps, Websites, and Designs That Inspire."/>

    <VideoBanner/>
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
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">120</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Employees</p>
              <p class="text-[#374754] text-start text-[1rem]">Total number of employees within the organization</p>
            </div>
            <!-- Card 3 -->
            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">5</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Global Offices</p>
              <p class="text-[#374754] text-start text-[1rem]">Total number of offices around the world</p>
            </div>
            <!-- Card 4 -->
            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">10</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Partners</p>
              <p class="text-[#374754] text-start text-[1rem]">Number of contracted partners</p>
            </div>

            <div class="px-20" data-aos="fade-up">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">5</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Countries</p>
              <p class="text-[#374754] text-start text-[1rem]">Number of contracted partners</p>
            </div>
          </div>
        </div>

        <!-- Contact Us Button -->
        <div class="flex flex-row justify-center items-center">
          <div class="w-full flex justify-center">
            <button @click="router.push({ name: 'contact-us' })" class="btn bg-[#6CBF8B] hover:bg-[#6CBF8B] ms-[10%] px-8 py-3 text-black">Contact Us</button>
          </div>
          <img :src="points" class="max-w-16 md:max-w-16 lg:max-w-full" alt="">
        </div>
      </div>
    </div>

    <div  class="bg-white py-4">
      <div class="container mx-auto">
        <h1 class="text-[#2E2E2F] text-[3rem] font-bold">Latest Picks</h1>
        <p class="text-[#2E3E5C] text-[1.5rem] font-bold">Check Our Latest New , Event , webners And More.</p>
        <div class="grid grid-cols-1 lg:grid-cols-2 mt-3">
          <div class="col-span-1 px-4 h-fit" data-aos="fade-up">
            <img :src="image4" class="h-3/4 w-full rounded-[16px]">
            <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
            <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Discover the latest trends and tools in mobile development at this exciting event! Engage with industry experts, explore innovative technologies, and enhance your skills in creating seamless, high-performing mobile applications for iOS and Android. Ideal for developers, designers, and tech enthusiasts.</h2>
          </div>
          <div class="col-span-1 grid grid-cols-1 md:grid-cols-2 items-center p-6">
            <div class="col-span-1 "data-aos="fade-up">
              <img :src="image5" class="rounded-[16px] w-[300px] h-[300px]" >
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-sm font-semibold pb-2">Our latest release is set to revolutionize quality assurance workflows with intuitive dashboards and AI-driven insights.</h2>
            </div>
            <div class="col-span-1" data-aos="fade-up">
              <img :src="image6" class="rounded-[16px] w-[300px] h-[300px]" >
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-sm font-semibold pb-2">We're proud to announce our collaboration with a major retailer to deliver a next-level shopping experience.</h2>
            </div>
            <div class="col-span-1" data-aos="fade-up">
              <img :src="image7" class="rounded-[16px] w-[300px] h-[300px]" >
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-sm font-semibold pb-2">This milestone reflects our commitment to delivering world-class software solutions.</h2>
            </div>
            <div class="col-span-1" data-aos="fade-up">
              <img :src="image8" class="rounded-[16px] w-[300px] h-[300px]" >
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-sm font-semibold pb-2"> AGMC opens a state-of-the-art office to support our growing team of software innovators.</h2>
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
          At AGMC, we approach your digital transformation as partners, not just providers. From consultation to deployment, we design, develop, and implement innovative solutions tailored to your needs. Whether you work on cloud, on-premises, or hybrid models, we ensure seamless integration, measurable productivity, and tangible results. Starting with your vision, we turn ideas into powerful, transformative solutions that drive your business forward.
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
            We craft native mobile applications that deliver exceptional performance and user experience on iOS and Android platforms. Using modern programming languages like Objective-C, Swift, and Java, our team ensures your app is robust, responsive, and tailored to meet your specific business goals.
          </p>
          </div>

        </div>
        <!-- Feature 2 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
            <div class="mb-4">
              <img :src="monitorMobile" alt="Web Icon" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold">Web Development</h3>
            <p class="text-gray-500 mt-3">
              Our web development services combine creativity, scalability, and advanced technology. From interactive websites to complex web applications, we build solutions that drive engagement and deliver results. Using industry-standard tools and frameworks, we help businesses thrive in the digital space.
            </p>
          </div>
        </div>
        <!-- Feature 3 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
          <div class="mb-4">
            <img :src="cloudConnection" alt="Cloud Icon" class="mx-auto">
          </div>
          <h3 class="text-xl font-semibold">Save Information in the Cloud</h3>
          <p class="text-gray-500 mt-3">
            Secure, reliable, and accessible — our cloud storage solutions help you store and manage your data with ease. By creating tailored cloud storage strategies, we ensure your information is protected, organized, and available when you need it, enabling seamless business operations.
          </p>
          </div>
        </div>
        <!-- Feature 4 -->
        <div class="text-center px-6 flex flex-col justify-between items-center" data-aos="fade-up">
          <div>
            <div class="mb-4">
              <img :src="oceanProtocol" alt="Power Apps Icon" class="mx-auto">
            </div>
            <h3 class="text-xl font-semibold">Form On-Prem Dynamics to Power Apps</h3>
            <p class="text-gray-500 mt-3">
              Unlock the full potential of your Dynamics 365 on-premises setup by integrating it with Power Apps. Our specialized solutions bridge the gap, allowing you to create powerful applications that enhance workflows, automate processes, and connect your data across platforms effortlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

    <Carsoual/>

    <div class="text-gray-800">
      <div class="container mx-auto p-8">
        <!-- Header Section -->
        <div class="text-center mb-12">
          <h1 class="text-6xl font-bold">Products & Platforms</h1>
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
            <h1 class="text-sm lg:text-6xl md:text-3xl font-bold text-white">SGT User App</h1>
            <p class="text-white mt-6 text-sm md:text-2xl lg:text-5xl leading-relaxed">
              Drive business transformation with the power of Microsoft Dynamics 365.
            </p>
          </div>
        </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-19126&p=f&t=3Hhlx0QkdrwPQ2rF-0&scaling=min-zoom&content-scaling=fixed&page-id=94%3A2312&starting-point-node-id=94%3A19148')">
              <h1 class="text-sm lg:text-6xl md:text-3xl font-bold text-white">SGT Judge App</h1>
              <p class="text-white mt-6 text-sm md:text-2xl lg:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/9rLxlYY3Y6wNb1xgieKwjm/SOCIAL-GOODTALENT?node-id=94-7402&p=f&t=3Hhlx0QkdrwPQ2rF-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1')">
              <h1 class="text-sm lg:text-6xl md:text-3xl font-bold text-white">SGT Dashboard</h1>
              <p class="text-white mt-6 text-sm md:text-2xl lg:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/IIq1ISVigF5ruOUTsCT1Np/wfdp-wallet?node-id=44-2260&p=f&t=GFpvOuG3OXXZ8C32-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=80%3A1616')">
              <h1 class="text-sm lg:text-6xl md:text-3xl font-bold text-white">WFDP Wallet</h1>
              <p class="text-white mt-6 text-sm md:text-2xl lg:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/IIq1ISVigF5ruOUTsCT1Np/wfdp-wallet?node-id=44-2260&p=f&t=GFpvOuG3OXXZ8C32-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=80%3A1616')">
              <h1 class="text-sm lg:text-6xl md:text-3xl font-bold text-white">SVS</h1>
              <p class="text-white mt-6 text-sm md:text-2xl lg:text-5xl leading-relaxed">
                Drive business transformation with the power of Microsoft Dynamics 365.
              </p>
            </div>
          </div>
        </Slide>
        <Slide>
          <div class="relative w-full">
            <img :src="bannerImage" class="w-full" alt="banner">
            <div class="absolute bottom-4 md:bottom-20 px-20 text-left" @click="openModal($event,'https://www.figma.com/proto/28qNcUatVXDdGoQN29hSse/WFDP?node-id=1-282&p=f&t=QSErSm00I76vXcoB-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A282')">
              <h1 class="text-sm lg:text-6xl md:text-3xl font-bold text-white">WFDP</h1>
              <p class="text-white mt-6 text-sm md:text-2xl lg:text-5xl leading-relaxed">
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
