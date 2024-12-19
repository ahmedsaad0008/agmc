<template>
  <div class="bg-[#2E2E2F0D] py-20">
    <div class=" container mx-auto" id="services">
        <Carousel :items-to-show="1" :breakpoints="breakpoints">
          <Slide v-for="(slide, index) in slides" :key="index" class="py-6 px-3">
            <div class="bg-white shadow-lg rounded-3xl p-6">
              <div class="grid grid-cols-3 gap-2">
                <div class="col-span-1">
                  <img :src="slide.image" alt="Slide Image" class="rounded w-full" />
                </div>
                <div class="col-span-2 text-left">
                  <h3 class="text-lg text-black font-bold">{{ slide.title }}</h3>
                  <p class="text-black mt-2">{{ slide.description }}</p>
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

const breakpoints = ref({
  768: {
    itemsToShow: 2,
  },
  1024: {
    itemsToShow: 3,
  },
})
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'



    const slides = ref([
      {
        image: web, // Replace with actual images
        title: "Web Development",
        description:
            "We build dynamic, responsive, and visually stunning websites tailored to your business needs. By blending advanced technology with meticulous attention to detail, we ensure seamless functionality, user-friendly interfaces, and cutting-edge design for a remarkable digital presence.",
      },
      {
        image: mobile, // Replace with actual images
        title: "Mobile Application",
        description:
            "From concept to launch, we craft powerful, intuitive mobile applications for Android and iOS. Our expert developers focus on delivering exceptional user experiences, feature-rich apps, and innovative solutions that drive engagement and accelerate growth for your business.",
      },
      {
        image: network, // Replace with actual images
        title: "Web Development (Alternate Focus)",
        description:
            "Transform your ideas into reality with robust web development solutions. We create scalable, high-performance websites that align with modern design trends and business goals, ensuring reliability, speed, and a compelling digital experience for your audience.",
      },
      {
        image: web, // Replace with actual images
        title: "Web Development",
        description:
            "We build dynamic, responsive, and visually stunning websites tailored to your business needs. By blending advanced technology with meticulous attention to detail, we ensure seamless functionality, user-friendly interfaces, and cutting-edge design for a remarkable digital presence.",
      },
      {
        image: mobile, // Replace with actual images
        title: "Mobile Application",
        description:
            "From concept to launch, we craft powerful, intuitive mobile applications for Android and iOS. Our expert developers focus on delivering exceptional user experiences, feature-rich apps, and innovative solutions that drive engagement and accelerate growth for your business.",
      },
      {
        image: network, // Replace with actual images
        title: "Web Development (Alternate Focus)",
        description:
            "Transform your ideas into reality with robust web development solutions. We create scalable, high-performance websites that align with modern design trends and business goals, ensuring reliability, speed, and a compelling digital experience for your audience.",
      },
    ]);




</script>

<style>
/* Customize Owl Carousel if needed */
#services .carousel__pagination-button::after {
  background-color: #6CBF8B80 !important;
  padding: 5px 20px;
  border-radius: 10px;

}

#services .carousel__pagination-button--active::after {
  background-color: #6CBF8B !important;
  padding: 5px 40px;

}
#services .carousel__pagination{
  bottom: -30px !important;
}

#services .carousel__slide--active{
  scale: 1.2;
}

#services .carousel__slide{
  padding: 40px;
}


</style>
