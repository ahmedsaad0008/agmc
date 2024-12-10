<script setup>
import Banner from "@/components/Banner.vue";
import points from '../assets/images/points.svg';
import icRoundRestaurant from '../assets/images/ic_round-restaurant.svg';
import image4 from '../assets/images/image _4.png';
import image5 from '../assets/images/image_5.png';
import image6 from '../assets/images/image_6.png';
import image7 from '../assets/images/image_7.png';
import image8 from '../assets/images/image_8.png';
</script>

<template>
  <main>
    <Banner/>
    <div class="bg-[#f4f4f4] text-[#2E3E5C]">
      <div class="container mx-auto p-6">
        <!-- Header Section -->
        <div class="text-center mb-10">
          <h2 class="text-[4.5rem] font-bold flex flex-row justify-center"><img :src="points">We Deliver Digital Productivity</h2>
          <h4 class="text-[#2E3E5C] mt-2 text-center text-2xl max-w-[70%] mx-auto">
            We craft technology solutions that digitally bond and transform the productivity of our customers and their citizens, workers, consumers, and partners.
          </h4>
        </div>

        <!-- Highlights Section -->
        <div class="text-center">
          <h2 class="text-[2rem] mb-6 text-[#374754] font-bold">Highlights</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="px-20">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">600</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Employees</p>
              <p class="text-[#374754] text-start text-[1rem]">Total number of employees within the organization</p>
            </div>
            <!-- Card 3 -->
            <div class="px-20">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">20</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Global Offices</p>
              <p class="text-[#374754] text-start text-[1rem]">Total number of offices around the world</p>
            </div>
            <!-- Card 4 -->
            <div class="px-20">
              <div class=" flex flex-row justify-start items-center gap-3">
                <img :src="icRoundRestaurant">
                <h4 class="text-[4rem] font-bold text-[#252B42]">100</h4>
              </div>
              <p class="text-[#374754] text-start font-bold text-[1rem]">Partenrs</p>
              <p class="text-[#374754] text-start text-[1rem]">Number of contracted partners</p>
            </div>

            <div class="px-20">
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
            <button class="btn bg-[#6CBF8B] hover:bg-[#6CBF8B] ms-[10%] px-8 py-3">Contact Us</button>
          </div>
          <img :src="points">
        </div>
      </div>
    </div>

    <div  class="bg-white py-4">
      <div class="container mx-auto">
        <h1 class="text-[#2E2E2F] text-[3rem] font-bold">Latest Picks</h1>
        <p class="text-[#2E3E5C] text-[1.5rem] font-bold">Check Our Latest New , Event , webners And More.</p>
        <div class="grid grid-cols-2 mt-3">
          <div class="col-span-1 px-4">
            <img :src="image4" class="h-3/4 w-full rounded-[16px]">
            <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
            <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
          </div>
          <div class="col-span-1 grid grid-cols-2">
            <div class="col-span-1">
              <img :src="image5" class="rounded-[16px]">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
            <div class="col-span-1">
              <img :src="image6" class="rounded-[16px]">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
            <div class="col-span-1">
              <img :src="image7" class="rounded-[16px]">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
            <div class="col-span-1">
              <img :src="image8" class="rounded-[16px]">
              <p class="text-[#374754] text-xs font-semibold py-2">Event</p>
              <h2 class="text-[#1E1F4B] text-lg font-bold pb-2">Link Development Bring The Latest Ai Advacecoment To Cairo ICT 2024</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div  class="bg-white py-4">
      <div class="container mx-auto">
        <h1 class="text-[#2E2E2F] text-[3rem] font-bold">Latest Picks</h1>
      </div>
    </div>
  </main>
</template>
