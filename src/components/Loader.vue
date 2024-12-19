<template>
  <div v-if="isLoading" class="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
    <div class="loader"></div>
  </div>
</template>

<script>
import { ref } from "vue";

export const isLoading = ref(false); // Shared state for loader

export default {
  setup() {
    return { isLoading };
  },
};
</script>

<style>

.loader {
  width: 64px;
  height: 64px;
  position: relative;
  background-image:
      linear-gradient(#FFF 16px, transparent 0) ,
      linear-gradient(#597CBD 16px, transparent 0) ,
      linear-gradient(#597CBD 16px, transparent 0) ,
      linear-gradient(#FFF 16px, transparent 0);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: left top , left bottom , right top , right bottom;
  animation: rotate 1s linear infinite;
}
@keyframes rotate {
  0% {
    width: 64px;
    height: 64px;
    transform: rotate(0deg)
  }
  50% {
    width: 30px;
    height: 30px;
    transform: rotate(180deg)
  }
  100% {
    width: 64px;
    height: 64px;
    transform: rotate(360deg)
  }
}

</style>
