<template>
  <div v-if="isOpen" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
    <div class="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl w-full">
      <!-- Modal Header -->
      <div class="flex justify-between items-center px-4 py-2 bg-gray-100 border-b">
        <h3 class="text-lg font-semibold">{{ title }}</h3>
        <button
            @click="closeModal"
            class="text-gray-500 hover:text-gray-700 transition"
        >
          ✖
        </button>
      </div>
      <!-- Modal Content -->
      <div class="p-4">
        <iframe
            :src="url"
            class="w-full h-[600px] border-0"
            allowfullscreen
            referrerpolicy="no-referrer"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Iframe Modal',
    },
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
/* Add custom styles if needed */
</style>
