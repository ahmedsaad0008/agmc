<template>
  <Banner :image="bannerImage"/>
  <section class="container mx-auto pb-10">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-black">News</h2>
    </div>
  <div class="flex flex-col lg:flex-row gap-8 p-8">
    <!-- Main Article Section -->
    <div class="flex-1">
      <h1 class="text-2xl text-black font-bold mb-4">{{ selectedObject.title }}}</h1>
      <p class="text-gray-500 text-sm mb-6">{{ selectedObject.date }}</p>
      <img
          :src="selectedObject.image"
          alt="Blockchain Image"
          class="w-full rounded-lg mb-6"
      />
      <p class="text-gray-700 text-xl mb-4 leading-6">
        {{ selectedObject.desc }}
      </p>
    </div>

    <!-- More News Section -->
    <div class="w-full lg:w-1/3">
      <h2 class="text-xl font-bold mb-4 text-black">More News</h2>
      <div class="space-y-4">
        <div
            v-for="(news, index) in moreNews"
            :key="index"
            class="flex items-center gap-4 border-b pb-4 cursor-pointer"
            @click="changeItem(index)"
        >
          <img
              :src="news.image"
              :alt="news.title"
              class="w-36 h-36 object-cover rounded-md"
          />
          <div class="flex flex-col justify-between h-100">
            <div>
              <h3 class="text-xl font-semibold text-black">{{ news.title }}</h3>
              <p class="text-sm text-gray-500">{{ news.desc }}</p>
            </div>
            <p class="text-sm text-gray-500">{{ news.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Banner from "@/components/Banner.vue";
import News from "../assets/images/news.svg";
import News1 from "../assets/images/news1.jpeg";
import News2 from "../assets/images/news2.jpeg";
import News3 from "../assets/images/news3.jpeg";
import News4 from "../assets/images/news4.jpeg";
import bannerImage from '@/assets/images/slider2.jpeg'


const moreNews = ref([
  {
    title: "AGMC Launches Next-Gen Test Management Tool",
    desc: " Our latest release is set to revolutionize quality assurance workflows with intuitive dashboards and AI-driven insights.",
    date: "27 Dec 2020",
    image: News1
  },
  {
    title: "AGMC Partners with Global Retail Giant for Custom Mobile App Development",
    desc: "We're proud to announce our collaboration with a major retailer to deliver a next-level shopping experience.",
    date: "27 Dec 2020",
    image: News2
  },
  {
    title: "AGMC Achieves ISO Certification for Software Quality Assurance",
    desc: "This milestone reflects our commitment to delivering world-class software solutions.",
    date: "27 Dec 2020",
    image: News3
  },
  {
    title: "New Office, New Possibilities!",
    desc: " AGMC opens a state-of-the-art office to support our growing team of software innovators.",
    date: "27 Dec 2020",
    image: News4
  },
  {
    title: "U.S. downs suspected Chinese spy balloon",
    desc: "China called the vessel’s downing “an excessive reaction” and said it “r",
    date: "27 Dec 2020",
    image: News1
  },
  {
    title: "AGMC Launches Next-Gen Test Management Tool",
    desc: " Our latest release is set to revolutionize quality assurance workflows with intuitive dashboards and AI-driven insights.",
    date: "27 Dec 2020",
    image: News2
  },
  {
    title: "AGMC Partners with Global Retail Giant for Custom Mobile App Development",
    desc: "We're proud to announce our collaboration with a major retailer to deliver a next-level shopping experience.",
    date: "27 Dec 2020",
    image: News3
  },
  {
    title: "AGMC Achieves ISO Certification for Software Quality Assurance",
    desc: "This milestone reflects our commitment to delivering world-class software solutions.",
    date: "27 Dec 2020",
    image: News4
  },
]);

const selectedObject = ref(moreNews.value[0]);
function changeItem(i){
  console.log(i)
  selectedObject.value = moreNews.value[i];
  console.log(selectedObject.value)
  console.log(moreNews.value[i])
}
</script>

<style scoped>
/* Add custom styles if needed */
</style>
