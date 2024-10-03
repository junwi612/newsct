<template>
    <view>
        <view class="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3">
          <view
            v-for="(item, index) in newsList"
            :key="index"
            class="bg-white hover:bg-gray-100 transition-colors overflow-hidden shadow rounded-lg"
            @click="goToDetail(item.id)"
          >
            <view class="p-4">
              <view class="aspect-w-16 aspect-h-9 mb-4">
                <img
                  class="object-cover rounded"
                  :src="item.image"
                  :alt="item.title"
                />
              </view>
              <h3 class="text-sm font-semibold text-gray-900 mb-2">
                {{ item.title }}
              </h3>
              <p class="text-gray-600 text-md mb-4">{{ item.summary }}</p>
              <view class="flex justify-between text-md text-gray-500">
                <span>{{ item.source }}</span>
                <span>{{ item.time }}</span>
              </view>
            </view>
          </view>
        </view>
    </view>
</template>

<script setup>
defineProps({
  newsList: {
    type: Array,
    default: () => [],
  },
})
</script>

<style scoped>

</style>