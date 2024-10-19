<template>
  <div class="min-h-screen bg-gray-100">
    <Header></Header>
    <div class="max-w-7xl mx-auto py-6 pt-2 sm:pt-3 lg:pt-6 sm:px-6 lg:px-8">
      <MainContent></MainContent>
    </div>
  </div>
</template>

<script setup>
import Header from "@/components/index/Header.vue";
import MainContent from "@/components/index/MainContent.vue";
</script>
