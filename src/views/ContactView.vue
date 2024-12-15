<template>
  <div class="container mx-auto">
    <div class="text-center mb-10">
      <h2 class="text-4xl font-bold text-black">Contact Us</h2>
      <p class="text-xl text-black">Any question or remarks? Just write us a message!</p>
    </div>
    <div class="flex flex-col lg:flex-row rounded-lg shadow-lg bg-white py-1 my-11 justify-center">
    <!-- Contact Information -->
    <div
        id="contact-info"
        class="w-full lg:w-1/3 text-white rounded-l-lg"
    >
      <div class="p-8">
      <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
      <p class="text-sm mb-6">Say something to start a live chat!</p>

      <div class="space-y-4">
        <!-- Phone -->
        <div class="flex items-center">
          <img :src="phoneCall" class=" mr-3">
          <span>+1 012 3456 789</span>
        </div>

        <!-- Email -->
        <div class="flex items-center">
          <img :src="mail" class=" mr-3">
          <span>demo@gmail.com</span>
        </div>

        <!-- Address -->
        <div class="flex items-center">
          <img :src="location" class=" mr-3">
          <span>
            132 Dartmouth Street Boston,<br />
            Massachusetts 02156 United States
          </span>
        </div>
      </div>
    </div>
    </div>

    <!-- Form Section -->
    <div class="w-full p-8 lg:w-2/3">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label class="block mb-1 font-semibold">First Name</label>
          <input
              type="text"
              placeholder="John"
              class="input input-bordered w-full"
          />
        </div>
        <div>
          <label class="block mb-1 font-semibold">Last Name</label>
          <input
              type="text"
              placeholder="Doe"
              class="input input-bordered w-full"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1 font-semibold">Email</label>
          <input
              type="email"
              placeholder="example@gmail.com"
              class="input input-bordered w-full"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1 font-semibold">Phone Number</label>
          <input
              type="text"
              placeholder="+1 012 3456 789"
              class="input input-bordered w-full"
          />
        </div>
        <div class="md:col-span-2">
          <label class="block mb-1 font-semibold">Message</label>
          <textarea
              class="textarea textarea-bordered w-full"
              placeholder="Write your message.."
              rows="4"
          ></textarea>
        </div>
      </div>
      <div class="mt-6 flex flex-row justify-end">
        <button class="btn btn-success ">Contact Us</button>
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import phoneCall from '../assets/images/phone-call.svg';
import mail from '../assets/images/mail.svg';
import location from '../assets/images/location.svg';
</script>

<style scoped>
#contact-info{
  background-image: url("src/assets/images/word.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;

}
</style>
