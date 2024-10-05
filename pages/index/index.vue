<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 1顶部导航栏 -->
    <div class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-bold text-gray-800">NewsApp</span>
          </div>
          <div class="flex items-center">
            <button
              @click="toggleMenu"
              plain="true"
              class="ml-4  text-gray-600 hover:text-gray-900 mt-2 px-2 py-2 rounded-md text-sm font-medium flex items-center"
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
    <!-- 搜索栏  px-5 mt-2 lg:hidden -->
    <div class="px-5 mt-3 sm:px-9 lg:hidden">
      <uni-search-bar
        bgColor="#fff"
        class="uni-mt-10"
        radius="5"
        placeholder="搜索内容"
        clearButton="auto"
        cancelButton="none"
        @confirm="search"
      />
    </div>
    <!-- 主要内容区 -->
    <div class="max-w-7xl mx-auto py-6 pt-2 sm:pt-3 lg:pt-6 sm:px-6 lg:px-8">
      <!-- 1新闻卡片 -->
      <Card></Card>
      <div class="px-4 sm:px-0 flex flex-col lg:flex-row">
        <!-- 新闻列表1 -->
        <NewsList :newsList="newsList"></NewsList>

        <!-- 侧边栏（PC端） -->
        <div class="lg:w-80 lg:ml-6 mt-6 lg:mt-0">
          <!-- 搜索栏 px-4 hidden lg:block sm:px-0 mb-6 -->
          <SearchBar></SearchBar>

          <div class="sticky top-6">
            <!-- 天气widget（PC端） sticky top-6  | bg-white overflow-hidden shadow hidden lg:block rounded-lg p-5 mb-6 -->
            <div
              class="bg-white overflow-hidden shadow hidden lg:block rounded-lg p-5 mb-6"
            >
              <h3 class="text-lg font-semibold text-gray-900 mb-4">今日天气</h3>
              <div class="flex items-center justify-between">
                <div>
                  <p class="text-3xl font-bold text-gray-900">
                    {{ weather.temperature }}°C
                  </p>
                  <p class="text-gray-600">{{ weather.description }}</p>
                </div>
                <p class="text-gray-500">{{ weather.location }}</p>
              </div>
            </div>

            <!-- 热门话题1 -->
            <PopularTopic :hotTopics="hotTopics"></PopularTopic>
          </div>
        </div>
      </div>

      <!-- 天气widget（移动端）lg:hidden mt-6 px-4 sm:px-0 -->
      <Weather :weather="weather" class="lg:hidden mt-6 sm:px-0"></Weather>
    </div>
  </div>
</template>

<script setup>
  import "swiper/swiper-bundle.css";
  import { ref, onMounted, onBeforeUnmount } from "vue";
  import Header from "../../components/Header.vue";
  import Card from "@/components/Card.vue";
  import NewsList from "@/components/NewsList.vue";
  import PopularTopic from "@/components/PopularTopic.vue";
  import Weather from "@/components/Weather.vue";
  import SearchBar from "@/components/SearchBar.vue";

  const navItems = ref(["首页", "国内", "国际", "科技", "体育"]);
  const showMenu = ref(false);
  const newsList = ref([
    {
      id: 1,
      title: "科技巨头发布革命性AI模型",
      summary: "该模型在多项任务中超越人类表现，引发伦理讨论。",
      image: "https://picsum.photos/id/237/800/450",
      source: "科技日报",
      time: "2小时前",
    },
    {
      id: 2,
      title: "全球气候变化会议在巴黎召开",
      summary: "各国领导人齐聚一堂，讨论应对气候危机的新措施。",
      image: "https://picsum.photos/id/238/800/450",
      source: "环球时报",
      time: "4小时前",
    },
    {
      id: 3,
      title: "新冠疫苗研究取得重大突破",
      summary: "科学家开发出可能对多种变种都有效的通用疫苗。",
      image: "https://picsum.photos/id/239/800/450",
      source: "健康报道",
      time: "昨天",
    },
    {
      id: 4,
      title: "2024奥运会筹备工作正式启动",
      summary: "巴黎奥组委公布了场馆建设和赛事安排的最新进展。",
      image: "https://picsum.photos/id/240/800/450",
      source: "体育新闻",
      time: "昨天",
    },
  ]);

  const lastScrollTop = ref(0);

  const handleScroll = () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (showMenu.value && st > lastScrollTop.value) {
      // 如果菜单打开并且向下滚动，则隐藏菜单
      showMenu.value = false;
    }
    lastScrollTop.value = st <= 0 ? 0 : st; // 处理移动设备或负滚动
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  const weather = ref({
    location: "北京",
    temperature: 25,
    description: "晴朗",
  });

  const hotTopics = ref([
    "疫情防控",
    "经济复苏",
    "教育改革",
    "科技创新",
    "环境保护",
  ]);

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
  uni-button[plain] {
    border: 1px solid #35353510 !important;
}

</style>
