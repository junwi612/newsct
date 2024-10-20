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
          <!-- 天气 -->
          <div class="text-gray-800">
            <div class="flex items-center">
              <i class="qi-100"></i>
              <span class="ml-1">25°C</span>
            </div>
          </div>
          <LinkLogin
            customClass="text-white hidden lg:block bg-gray-800 hover:bg-gray-900 rounded-lg px-4 ml-2 py-2 text-sm duration-300"
          ></LinkLogin>
          <button
            @click="toggleMenu"
            class="lg:hidden ml-2 px-2"
            aria-label="Toggle menu"
            :aria-expanded="showMenu"
          >
            <div class="item-center menu-icon" :class="{ open: showMenu }">
              <span></span>
              <span></span>
              <span></span>
            </div>
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
          class="lg:hidden bg-white rounded-b-lg shadow-lg mt-16 w-full max-w-md p-4 ml-auto"
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
          <LinkLogin
            style="margin-top: 20px"
            customClass="text-white bg-gray-800 hover:bg-gray-900 rounded-lg px-4 py-2 text-sm duration-300"
          ></LinkLogin>
        </div>
      </div>
    </transition>
    <!-- lg 显示 navItems -->
    <div class="hidden lg:block"></div>
  </div>
</template>

<script setup>
  import { ref, watchEffect } from "vue";
  import NewsLogo from "@/components/index/NewsLogo.vue";
  import LinkLogin from "@/components/index/LinkLogin.vue";

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

  .menu-icon {
    width: 30px;
    height: 20px;
    position: relative;
    margin: auto;
    transition: 0.5s ease-in-out;
  }

  .menu-icon span {
    display: block;
    position: absolute;
    height: 2.5px;
    width: 100%;
    background: #000;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transition: 0.25s ease-in-out;
  }

  .menu-icon span:nth-child(1) {
    top: 0px;
  }

  .menu-icon span:nth-child(2) {
    top: 10px;
  }

  .menu-icon span:nth-child(3) {
    top: 20px;
  }

  .menu-icon.open span:nth-child(1) {
    top: 10px;
    transform: rotate(135deg);
  }

  .menu-icon.open span:nth-child(2) {
    opacity: 0;
    left: -60px;
  }

  .menu-icon.open span:nth-child(3) {
    top: 10px;
    transform: rotate(-135deg);
  }
</style>
