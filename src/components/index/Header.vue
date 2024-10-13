<template>
  <div class="bg-white shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <span class="text-2xl font-bold text-gray-800">
            <NewsLogo></NewsLogo>
          </span>
        </div>
        <div class="flex items-center">
          <div class="text-gray-800">
            <div>☀25°C</div>
          </div>
          <button
            @click="toggleMenu"
            plain="true"
            class="ml-4 text-gray-600 hover:text-gray-900 px-2 py-2 rounded-md text-sm font-medium flex items-center"
          >
            <svg
              v-if="!showMenu"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="w-6 h-6 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <transition name="slide-fade">
      <div
        v-show="showMenu"
        @click.self="closeMenu"
        class="fixed inset-0 z-50 flex items-start justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div
          class="bg-white rounded-b-lg shadow-lg mt-16 w-full max-w-md p-4 ml-auto"
        >
          <div class="flex flex-col">
            <a
              v-for="(item, index) in navItems"
              :key="index"
              href="#"
              class="text-gray-600 hover:text-gray-900 mt-2 px-3 py-2 text-sm font-medium border-b border-gray-100 hover:border-gray-500 transition duration-200"
            >
              {{ item }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { ref } from "vue";
  import NewsLogo from "@/components/index/NewsLogo.vue";

  const navItems = ref(["首页", "国内", "国际", "科技", "体育"]);
  const showMenu = ref(false);

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  const closeMenu = () => {
    showMenu.value = false;
  };
</script>

<style scoped>
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-10px);
  }
  button[plain] {
    border: 1px solid #35353510 !important;
  }
</style>
