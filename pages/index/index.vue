<template>
  <div class="min-h-screen bg-gray-100">
    <!-- 顶部导航栏 -->
    <nav class="bg-white shadow">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex-shrink-0 flex items-center">
            <span class="text-2xl font-bold text-gray-800">NewsApp</span>
          </div>
          <div class="flex items-center">
            <div class="hidden md:flex truncate sm:ml-6">
              <a
                v-for="(item, index) in navItems"
                :key="index"
                href="#"
                class="text-gray-600 hover:text-gray-900 mt-3 px-1 py-2 rounded-md text-sm font-medium"
              >
                {{ item }}
              </a>
            </div>
            <button
              @click="toggleMenu"
              class="md:hidden ml-4 text-gray-600 hover:text-gray-900 mt-3 px-3 py-2 rounded-md text-sm font-medium"
            >
              更多
            </button>
          </div>
        </div>
      </div>

      <transition name="slide-fade">
        <div
          v-if="showMenu"
          @click.self="closeMenu"
          class="fixed inset-0 z-50 flex items-start justify-center"
        >
          <div
            class="bg-white rounded-b-lg shadow-lg mt-16 w-full max-w-md p-4"
          >
            <div class="flex flex-col">
              <a
                v-for="(item, index) in navItems"
                :key="index"
                href="#"
                class="text-gray-600 hover:text-gray-900 mt-2 px-3 py-2 rounded-md text-sm font-medium"
              >
                {{ item }}
              </a>
            </div>
          </div>
        </div>
      </transition>
    </nav>
    <!-- 搜索栏 -->
    <div class="px-5  mt-2 lg:hidden">
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
    <main class="max-w-7xl mx-auto py-6 pt-2 sm:pt-5 sm:px-6 lg:px-8">
      <!-- 轮播图s -->
      <div class="px-4 sm:px-0 flex flex-col lg:flex-row">
        <!-- 新闻卡片 -->
        <div class="flex-1 w-full mb-5">
          <div
            class="bg-white overflow-hidden shadow lg:h-96 rounded-lg flex flex-col"
            @click="goToDetail(1)"
          >
            <image
              class="object-cover rounded-t-lg w-full"
              src="https://picsum.photos/id/1018/800/450"
              alt="新闻图片"
            />
            <div class="p-4 flex-1">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">新闻标题</h3>
              <p class="text-gray-600 mb-4">
                这是一段描述，详细说明新闻的内容，提供更多信息。
              </p>
              <a
                href="#"
                class="bg-gray-900 text-gray-100 hover:bg-gray-800 transition-colors duration-200 px-3 py-1 rounded no-underline"
                @click.prevent="goToDetail(1)"
              >
                阅读全文
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="px-4 sm:px-0 flex flex-col lg:flex-row">
        <!-- 新闻列表 -->
        <div class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
          <div
            v-for="(item, index) in newsList"
            :key="index"
            class="bg-white hover:bg-gray-100 transition-colors overflow-hidden shadow rounded-lg"
            @click="goToDetail(item.id)"
          >
            <div class="p-4">
              <div class="aspect-w-16 aspect-h-9 mb-4">
                <img
                  class="object-cover rounded"
                  :src="item.image"
                  :alt="item.title"
                />
              </div>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 text-md mb-4">{{ item.summary }}</p>
              <div class="flex justify-between text-md text-gray-500">
                <span>{{ item.source }}</span>
                <span>{{ item.time }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 侧边栏（PC端） -->
        <div class="lg:w-80 lg:ml-6 mt-6 lg:mt-0">
          <!-- 搜索栏 -->
          <div class="px-4 hidden sm:block sm:px-0 mb-6">
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
          <div class="sticky top-6">
            <!-- 天气widget（PC端） -->
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

            <!-- 热门话题 -->
            <div class="bg-white overflow-hidden shadow rounded-lg p-5">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">热门话题</h3>
              <ul class="space-y-2">
                <li
                  v-for="(topic, index) in hotTopics"
                  :key="index"
                  class="text-gray-600 hover:text-gray-900 cursor-pointer"
                >
                  # {{ topic }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 天气widget（移动端） -->
      <div class="lg:hidden mt-6 px-4 sm:px-0">
        <div class="bg-white overflow-hidden shadow rounded-lg p-5">
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
      </div>
    </main>
  </div>
</template>

<script setup>
  import "swiper/swiper-bundle.css";
  import { ref } from "vue";

  const carouselItems = ref([
    {
      image:
        "https://g-0e5z5gavv2e.vusercontent.net/placeholder.svg?height=400&width=600",
      title: "轮播图标题1",
    },
    {
      image:
        "https://g-0e5z5gavv2e.vusercontent.net/placeholder.svg?height=400&width=600",
      title: "轮播图标题2",
    },
    {
      image:
        "https://g-0e5z5gavv2e.vusercontent.net/placeholder.svg?height=400&width=600",
      title: "轮播图标题3",
    },
  ]);

  const navItems = ref(["首页", "国内", "国际", "科技", "体育"]);
  const showMenu = ref(false); // 添加这个变量
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

  const onSearch = (e) => {
    console.log("搜索:", e.value);
    // 实现搜索逻辑
  };

  const goToDetail = (id) => {
    uni.navigateTo({
      url: `/pages/detail/detail?id=${id}`,
    });
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
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.3s ease;
  }
</style>
