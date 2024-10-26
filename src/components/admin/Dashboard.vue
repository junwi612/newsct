<template>
  <div>
    <h2>后台管理</h2>
    <button @click="logout">登出</button>
    <NewsList />
  </div>
</template>

<script setup>
  import NewsList from "./NewsList.vue";
  import { useRouter } from "vue-router";
  const $router = useRouter();
  const logout = () => {
    localStorage.removeItem("isAuthenticated");
    $router.push("/login");
  };
</script>

<style lang="scss" scoped></style>
