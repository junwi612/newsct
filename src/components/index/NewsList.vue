<template>
  <div>
    <div class="flex-1 grid  md:grid-cols-2 lg:grid-cols-3 gap-4">
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
          <h3 class="text-lg font-semibold text-gray-900 mb-2">
            {{ item.title }}
          </h3>
          <p class="text-gray-600 mb-4">{{ item.summary }}</p>
          <div class="flex justify-between text-md text-gray-500">
            <span>{{ item.source }}</span>
            <span>{{ item.time }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({
    newsList: {
      type: Array,
      default: () => [],
    },
  });
</script>

<style scoped></style>
