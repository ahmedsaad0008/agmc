<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import logo from './assets/images/agmc.png';
import Banner from "@/components/Banner.vue";
</script>

<template>
  <div class="container mx-auto">
    <div class="navbar px-4">
      <!-- Logo Section -->
      <div class="navbar-start w-fit">
        <a href="/" class="max-w-16 md:max-w-full">
          <img :src="logo" alt="agmc" class="max-w-32">
        </a>
      </div>

      <!-- Navigation Links -->
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 space-x-4 text-lg font-medium">
          <li><router-link to="/" class="items-link">Home</router-link></li>
          <li><router-link to="/services" class="items-link">Services</router-link></li>
          <li><router-link to="/projects" class="items-link">Projects</router-link></li>
          <li><router-link to="/about-us" class="items-link">About Us</router-link></li>
          <li><router-link to="/news" class="items-link">News</router-link></li>
          <li><router-link to="/contact-us" class="items-link">Contact Us</router-link></li>
        </ul>

      </div>

      <!-- Search Bar -->
      <div class="navbar-end w-[50%] md:w-full">


        <div class="flex-none block lg:hidden">
          <ul class="menu menu-horizontal px-1">

            <li>
              <details>
                <summary> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                  <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h7" />
                </svg></summary>
                <ul class="bg-base-100 rounded-t-none p-2">
                  <li><router-link to="/" >Home</router-link></li>
                  <li><router-link to="/services">Services</router-link></li>
                  <li><router-link to="/projects">Projects</router-link></li>
                  <li><router-link to="/about-us">About Us</router-link></li>
                  <li><router-link to="/news">News</router-link></li>
                  <li><router-link to="/contact-us">Contact Us</router-link></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>




    <RouterView />




  <footer class="bg-[#2e2e2e] text-gray-300 py-8">
    <!-- Top Section -->
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <a href="#" class="text-3xl font-bold text-gradient bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-500">
          <img :src="logo" alt="agmc" class="max-w-32">
        </a>

        <!-- Social Icons -->
        <div class="flex space-x-4">
          <a href="https://www.instagram.com/agmcltd?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="btn btn-circle bg-white text-white">
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 3.60547C8.22266 3.60547 9.64453 5.02734 9.64453 6.75C9.64453 8.5 8.22266 9.89453 6.5 9.89453C4.75 9.89453 3.35547 8.5 3.35547 6.75C3.35547 5.02734 4.75 3.60547 6.5 3.60547ZM6.5 8.80078C7.62109 8.80078 8.52344 7.89844 8.52344 6.75C8.52344 5.62891 7.62109 4.72656 6.5 4.72656C5.35156 4.72656 4.44922 5.62891 4.44922 6.75C4.44922 7.89844 5.37891 8.80078 6.5 8.80078ZM10.4922 3.49609C10.4922 3.90625 10.1641 4.23438 9.75391 4.23438C9.34375 4.23438 9.01562 3.90625 9.01562 3.49609C9.01562 3.08594 9.34375 2.75781 9.75391 2.75781C10.1641 2.75781 10.4922 3.08594 10.4922 3.49609ZM12.5703 4.23438C12.625 5.24609 12.625 8.28125 12.5703 9.29297C12.5156 10.2773 12.2969 11.125 11.5859 11.8633C10.875 12.5742 10 12.793 9.01562 12.8477C8.00391 12.9023 4.96875 12.9023 3.95703 12.8477C2.97266 12.793 2.125 12.5742 1.38672 11.8633C0.675781 11.125 0.457031 10.2773 0.402344 9.29297C0.347656 8.28125 0.347656 5.24609 0.402344 4.23438C0.457031 3.25 0.675781 2.375 1.38672 1.66406C2.125 0.953125 2.97266 0.734375 3.95703 0.679688C4.96875 0.625 8.00391 0.625 9.01562 0.679688C10 0.734375 10.875 0.953125 11.5859 1.66406C12.2969 2.375 12.5156 3.25 12.5703 4.23438ZM11.2578 10.3594C11.5859 9.56641 11.5039 7.65234 11.5039 6.75C11.5039 5.875 11.5859 3.96094 11.2578 3.14062C11.0391 2.62109 10.6289 2.18359 10.1094 1.99219C9.28906 1.66406 7.375 1.74609 6.5 1.74609C5.59766 1.74609 3.68359 1.66406 2.89062 1.99219C2.34375 2.21094 1.93359 2.62109 1.71484 3.14062C1.38672 3.96094 1.46875 5.875 1.46875 6.75C1.46875 7.65234 1.38672 9.56641 1.71484 10.3594C1.93359 10.9062 2.34375 11.3164 2.89062 11.5352C3.68359 11.8633 5.59766 11.7812 6.5 11.7812C7.375 11.7812 9.28906 11.8633 10.1094 11.5352C10.6289 11.3164 11.0664 10.9062 11.2578 10.3594Z" fill="#2E2E2F"/>
            </svg>
          </a>
          <a href="https://www.facebook.com/AGMC.UK" target="_blank" class="btn btn-circle bg-white text-white">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.7812 7.75C13.7812 11.1406 11.293 13.957 8.03906 14.4492V9.71875H9.625L9.92578 7.75H8.03906V6.49219C8.03906 5.94531 8.3125 5.42578 9.16016 5.42578H10.0078V3.75781C10.0078 3.75781 9.24219 3.62109 8.47656 3.62109C6.94531 3.62109 5.93359 4.57812 5.93359 6.27344V7.75H4.21094V9.71875H5.93359V14.4492C2.67969 13.957 0.21875 11.1406 0.21875 7.75C0.21875 4.00391 3.25391 0.96875 7 0.96875C10.7461 0.96875 13.7812 4.00391 13.7812 7.75Z" fill="#2E2E2F"/>
            </svg>
          </a>
        </div>
      </div>

      <!-- Divider -->
      <div class="divider mt-4 mb-8 border-b-2"></div>

      <!-- Links Section -->
        <div>
          <h2 class="text-lg font-bold text-center lg:text-start">Company</h2>
          <ul class="mt-4 space-y-2 flex flex-col lg:items-start justify-center lg:justify-start sm:flex-row items-center sm:items-end md:gap-10 lg:gap-36 w-full">
            <li><router-link to="/" >Home</router-link></li>
            <li><router-link to="/services">Services</router-link></li>
            <li><router-link to="/projects">Projects</router-link></li>
            <li><router-link to="/about-us">About Us</router-link></li>
            <li><router-link to="/news">News</router-link></li>
            <li><router-link to="/contact-us">Contact Us</router-link></li>
          </ul>
        </div>

      <!-- Copyright Section -->
      <div class="text-center mt-8">
        <p class="text-sm">&copy; Power 2024 - All Rights Reserved</p>
      </div>
    </div>
  </footer>

</template>

<style scoped>
.items-link{
  color: #a8acba;
  font-weight: bold;
}

.items-link.router-link-active{
  color: #2E2E2F;
}
</style>
