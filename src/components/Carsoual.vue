<template>
  <div class="bg[#2E2E2F0D] py-20">
    <div class=" container mx-auto">
        <Carousel v-bind="config">
          <Slide v-for="(slide, index) in slides" :key="index" class="py-6 px-3">
            <div class="bg-white shadow-lg rounded-3xl p-6">
              <div class="grid grid-cols-3 gap-2">
                <div class="col-span-1">
                  <img :src="slide.image" alt="Slide Image" class="rounded w-full" />
                </div>
                <div class="col-span-2 text-left">
                  <h3 class="text-lg text-black font-bold mt-4">{{ slide.title }}</h3>
                  <p class="text-black mt-2">{{ slide.description }}</p>
                  <a href="#" class="text-lg text-black font-bold underline">More</a>
                </div>
              </div>
            </div>

          </Slide>
          <template #addons>
            <Pagination />
          </template>
        </Carousel>
    </div>
  </div>
</template>

<script setup>
import {  ref } from "vue";
import web from '../assets/images/web.svg';
import mobile from '../assets/images/mobile.svg';
import network from '../assets/images/network.svg';
const config = {
  itemsToShow: 3
}
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'



    const slides = ref([
      {
        image: web, // Replace with actual images
        title: "Web Development",
        description:
            "With our microscopic detailing and scrupulous strategies, our erudite developers design and develop creative Android and iOS applications.",
      },
      {
        image: mobile, // Replace with actual images
        title: "Mobile-Application",
        description:
            "With our microscopic detailing and scrupulous strategies, our erudite developers design and develop creative Android and iOS applications.",
      },
      {
        image: network, // Replace with actual images
        title: "Web Development",
        description:
            "With our microscopic detailing and scrupulous strategies, our erudite developers design and develop creative Android and iOS applications.",
      },
      {
        image: web, // Replace with actual images
        title: "Web Development",
        description:
            "With our microscopic detailing and scrupulous strategies, our erudite developers design and develop creative Android and iOS applications.",
      },
      {
        image: mobile, // Replace with actual images
        title: "Mobile-Application",
        description:
            "With our microscopic detailing and scrupulous strategies, our erudite developers design and develop creative Android and iOS applications.",
      },
      {
        image: network, // Replace with actual images
        title: "Web Development",
        description:
            "With our microscopic detailing and scrupulous strategies, our erudite developers design and develop creative Android and iOS applications.",
      },
    ]);




</script>

<style>
/* Customize Owl Carousel if needed */
.carousel__pagination-button::after {
  background-color: #6CBF8B80 !important;
  padding: 5px 20px;
  border-radius: 10px;

}

.carousel__pagination-button--active::after {
  background-color: #6CBF8B !important;
  padding: 5px 40px;

}
.carousel__pagination{
  bottom: -20px !important;
}
</style>
