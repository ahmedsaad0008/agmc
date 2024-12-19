<template>
  <Banner :image="bannerImage" description="At AGMC, we specialize in delivering cutting-edge software solutions tailored to your business needs. From mobile apps to web platforms, test management systems to graphic design, we bring your ideas to life with precision and creativity. Our team of expert developers and designers is committed to driving digital transformation and helping you achieve your goals."/>
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-black">About Us</h2>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6 order-last md:order-first">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">"AGMC Launches Next-Gen Test Management Tool!</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">Our latest release is set to revolutionize quality assurance workflows with intuitive dashboards and AI-driven insights.</p>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="about2" alt="UI/UX Design" class="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover rounded-full mx-auto" data-aos="fade-left">
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="about3" alt="UI/UX Design" class="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover rounded-full mx-auto" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">AGMC Partners with Global Retail Giant for Custom Mobile App Development</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">We're proud to announce our collaboration with a major retailer to deliver a next-level shopping experience.</p>
      </div>
    </div>

    <div class="grid gap-6 grid-cols-1 md:grid-cols-2">
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6 order-last md:order-first">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">AGMC Achieves ISO Certification for Software Quality Assurance </h3>
        <p class="text-sm lg:text-2xl text-[#575757]">This milestone reflects our commitment to delivering world-class software solutions.</p>
      </div>
      <div class="col-span-1 order-first md:order-last">
        <img :src="about1" alt="UI/UX Design" class="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover rounded-full mx-auto " data-aos="fade-left">
      </div>
    </div>


    <div class="grid gap-6 grid-cols-1 md:grid-cols-2 mb-10">
      <div class="col-span-1">
        <img :src="about4" alt="UI/UX Design" class="w-[300px] h-[300px] md:w-[600px] md:h-[600px] object-cover rounded-full mx-auto" data-aos="fade-right">
      </div>
      <div class="col-span-1 px-20 flex flex-col justify-center gap-6">
        <h3 class="text-3xl lg:text-5xl font-bold text-[#2E2E2F]">New Office, New Possibilities!</h3>
        <p class="text-sm lg:text-2xl text-[#575757]">AGMC opens a state-of-the-art office to support our growing team of software innovators.</p>
      </div>
    </div>
  </section>
</template>

<style>

</style>
<script setup >
import about1 from '../assets/images/news1.jpeg';
import about2 from '../assets/images/news2.jpeg';
import about3 from '../assets/images/news3.jpeg';
import about4 from '../assets/images/news4.jpeg';
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