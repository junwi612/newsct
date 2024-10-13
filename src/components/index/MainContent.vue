<template>
    <div>
      <Card></Card>
      <div class="px-4 sm:px-0 flex flex-col lg:flex-row">
        <NewsList :newsList="newsList"></NewsList>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import Card from "@/components/index/Card.vue";
  import NewsList from "@/components/index/NewsList.vue";
  
  const newsList = ref([
    { id: 1, title: "科技巨头发布革命性AI模型", summary: "该模型在多项任务中超越人类表现，引发伦理讨论。", image: "https://picsum.photos/id/237/800/450", source: "科技日报", time: "2小时前" },
    { id: 2, title: "全球气候变化会议在巴黎召开", summary: "各国领导人齐聚一堂，讨论应对气候危机的新措施。", image: "https://picsum.photos/id/238/800/450", source: "环球时报", time: "4小时前" },
    { id: 3, title: "新冠疫苗研究取得重大突破", summary: "科学家开发出可能对多种变种都有效的通用疫苗。", image: "https://picsum.photos/id/239/800/450", source: "健康报道", time: "昨天" },
    { id: 4, title: "2024奥运会筹备工作正式启动", summary: "巴黎奥组委公布了场馆建设和赛事安排的最新进展。", image: "https://picsum.photos/id/240/800/450", source: "体育新闻", time: "昨天" },
  ]);
  </script>
  