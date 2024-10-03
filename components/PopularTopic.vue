<template>
    <view>
        <view class="bg-white  hover:bg-gray-100 transition-colors overflow-hidden shadow rounded-lg p-5">
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
            </view>
    </view>
</template>

<script setup>
defineProps({
  hotTopics: {
    type: Array,
    default: () => [],
  },
})
</script>

<style  scoped>

</style>