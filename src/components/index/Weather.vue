<template>
  <div>
    <div class="lg:hidden mt-6 px-4 sm:px-0">
      <div class=" hover:bg-gray-100 transition-colors bg-white overflow-hidden shadow rounded-lg p-5">
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
  </div>
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
