<template>
  <div>
    <router-link to="/login" :class="customClass">登录</router-link>
  </div>
</template>

<script setup>
  const props = defineProps({
    customClass: {
      type: String,
      default: "",
    },
  });
</script>

<style scoped></style>
