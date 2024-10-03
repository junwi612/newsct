<template>
  <view>
    <view class="lg:hidden mt-6 px-4 sm:px-0">
      <view class="bg-white overflow-hidden shadow rounded-lg p-5">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">今日天气</h3>
        <view class="flex items-center justify-between">
          <view>
            <p class="text-3xl font-bold text-gray-900">
              {{ weather.temperature }}°C
            </p>
            <p class="text-gray-600">{{ weather.description }}</p>
          </view>
          <p class="text-gray-500">{{ weather.location }}</p>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
  defineProps(
    {
      weather: {
        type: Object,
        default: () => {},
      },
    },
  );
</script>

<style scoped></style>
