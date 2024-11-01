<template>
  <div
    class="splash-screen relative flex justify-center items-center w-screen h-screen bg-gradient-to-r overflow-hidden"
  >
    <Background></Background>

    <button
      @click="toggleParticleOptions"
      class="absolute top-4 right-4 z-20 bg-white text-gray-700 rounded-full p-2 shadow-md hover:bg-gray-100"
    >
      ⚙️
    </button>
    <transition name="fade">
      <div
        v-if="showParticleOptions"
        class="absolute top-16 right-4 z-20 w-20 text-center p-2 bg-white rounded-lg shadow-lg space-y-2"
      >
        <!-- 跳转到首页 -->
        <router-link to="/">首页</router-link>
      </div>
    </transition>

    <!-- 登录表单 -->
    <transition name="fade">
      <div
        v-if="showLogin"
        class="absolute z-20 w-80 bg-white rounded-lg shadow-lg p-6"
      >
        <h2 class="text-2xl font-bold text-center mb-4">登录</h2>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <input
            v-model="account"
            id="account"
            type="text"
            placeholder="账号"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <input
            v-model="password"
            id="password"
            type="password"
            placeholder="密码"
            class="w-full p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            class="w-full bg-black transition-colors text-white py-2 rounded hover:bg-gray-900"
          >
            登录
          </button>
        </form>
      </div>
    </transition>
  </div>
</template>

<script setup>
  import { ref, onMounted } from "vue";
  import Background from "./Background.vue";
  import { useRouter } from "vue-router"; 
  const router = useRouter();

  const account = ref("");
  const password = ref("");

  const handleLogin = () => {
    if (account.value === "admin" && password.value === "admin") {
      localStorage.setItem('isAuthenticated', 'true');
      alert("登录成功");
      router.push("/dashboard");
    } else {
      alert("登录失败");
    }
  };

  // //
  const showParticleOptions = ref(false);
  const toggleParticleOptions = () => {
    showParticleOptions.value = !showParticleOptions.value;
  };

  const showLogin = ref(false);

  onMounted(() => {
    setTimeout(() => {
      showLogin.value = true;
    }, 500);
  });
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
</style>
