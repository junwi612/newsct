<template>
  <view>
    <view class="px-4 hidden lg:block sm:px-0 mb-6">
      <uni-search-bar
        bgColor="#fff"
        class="uni-mt-10"
        radius="5"
        placeholder="搜索内容"
        clearButton="auto"
        cancelButton="none"
        @confirm="search"
      />
    </view>
  </view>
</template>

<script setup></script>

<style scoped></style>
