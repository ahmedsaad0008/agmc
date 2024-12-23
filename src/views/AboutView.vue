<template>
<!--  <Banner :image="bannerImage" description="At AGMC, we specialize in delivering cutting-edge software solutions tailored to your business needs. From mobile apps to web platforms, test management systems to graphic design, we bring your ideas to life with precision and creativity. Our team of expert developers and designers is committed to driving digital transformation and helping you achieve your goals."/>-->
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-6xl font-bold text-black">About Us</h2>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6 order-last md:order-first">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Who We Are</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Since our inception in 2016, AGMC has been at the forefront of digital innovation, delivering top-notch solutions in software development, mobile applications, and website design. With a strong foundation of expertise and creativity, we have grown into a trusted partner for businesses across various industries, helping them transform ideas into reality.</p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black">Read More</button>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="about2" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="about3" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Our Journey</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Over the years, AGMC has successfully completed numerous projects, ranging from dynamic mobile apps to robust enterprise solutions. Our journey is marked by a relentless pursuit of excellence and a commitment to empowering businesses with cutting-edge technologies. Every project we undertake reflects our dedication to quality, innovation, and customer satisfaction.</p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black">Read More</button>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6 order-last md:order-first">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">Why Choose Us </h3>
        <p class="text-sm lg:text-2xl text-[#575757]">At AGMC, we believe in building lasting relationships through exceptional service and results. With a team of seasoned professionals, we deliver customized solutions tailored to your unique business needs. Our proven track record of success, combined with our passion for innovation, makes us the partner of choice for businesses looking to thrive in a competitive digital landscape.</p>
        <button class="btn bg-[#597CBD] hover:bg-[#597CBD] px-8 py-3 w-fit text-black">Read More</button>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="about1" alt="UI/UX Design" class="rounded w-3/4 lg:w-full mx-auto " data-aos="fade-left">
      </div>
    </div>
  </section>
</template>

<style>

</style>
<script setup >
import about1 from '../assets/images/about-1.svg';
import about2 from '../assets/images/about-2.svg';
import about3 from '../assets/images/about-3.svg';
import Banner from "@/components/Banner.vue";
import AOS from 'aos';
import bannerImage from '@/assets/images/slider1.jpeg'
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