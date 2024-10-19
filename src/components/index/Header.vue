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
            <div class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="qi-100"
                viewBox="0 0 16 16"
              >
                <path
                  d="M7.655 2.357a.5.5 0 0 0 .854-.353v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.353Zm-4.08 1.861c.06.026.126.039.191.039l.001-.001a.5.5 0 0 0 .355-.855l-1.064-1.06a.5.5 0 0 0-.707.708l1.062 1.06a.498.498 0 0 0 .162.11ZM.503 8.496h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm1.914 5.221a.501.501 0 0 0 .631-.063l1.063-1.06a.5.5 0 0 0-.708-.707l-1.062 1.06a.5.5 0 0 0 .076.77Zm5.225 2.14a.5.5 0 0 0 .854-.354v-1.5a.5.5 0 0 0-1 0v1.5a.5.5 0 0 0 .146.354Zm5.467-2.084a.5.5 0 0 0 .544-.816l-1.06-1.06a.498.498 0 0 0-.832.152.5.5 0 0 0 .126.555l1.06 1.06a.496.496 0 0 0 .162.109Zm.893-5.263h1.5a.5.5 0 1 0 0-1h-1.5a.5.5 0 0 0 0 1Zm-2.031-4.327a.5.5 0 0 0 .633-.063l1.06-1.06a.5.5 0 1 0-.708-.708l-1.06 1.06a.5.5 0 0 0 .075.77Zm-6.466.075a4.5 4.5 0 1 1 5 7.484 4.5 4.5 0 0 1-5-7.484Zm4.445.832a3.5 3.5 0 1 0-3.89 5.82 3.5 3.5 0 0 0 3.89-5.82Z"
                /></svg
              ><span class="ml-1"> 25°C </span>
            </div>
          </div>
          <router-link
            to="/login"
            class="text-white hidden lg:block bg-gray-800 hover:bg-gray-900 rounded-lg px-4 ml-2 py-2 text-sm duration-300 "
          >
            登录
          </router-link>
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
  import { ref, watchEffect } from "vue";
  import NewsLogo from "@/components/index/NewsLogo.vue";

  const navItems = ref(["首页", "国内", "国际", "科技", "体育"]);
  const showMenu = ref(false);

  const toggleMenu = () => {
    showMenu.value = !showMenu.value;
  };

  const closeMenu = () => {
    showMenu.value = false;
  };

  const lastScrollTop = ref(0);
  watchEffect(() => {
    if (showMenu.value) {
      /**
       * When the user scrolls down, hide the menu.
       * This function is added and removed as a window.scroll event listener when
       * the menu is shown and hidden, respectively.
       */
      const handleScroll = () => {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop.value) {
          showMenu.value = false;
          lastScrollTop.value = st;
        }
        lastScrollTop.value = st;
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  });
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
