<script setup>
import { RouterView } from 'vue-router'
// import { useAuthStore } from '@/stores'
// const darkModeStore = useDarkModeStore();
// const isDark = computed(() => darkModeStore.mode === 'dark');
import NavBar from './components/NavBar.vue'
// const authStore = useAuthStore()
</script>
<template>
  <div>
    <NavBar />

    <RouterView />
  </div>
</template>
<!-- <nav v-show="authStore.user" class="navbar navbar-expand navbar-dark bg-dark">
    <div class="navbar-nav">
      <RouterLink to="/" class="nav-item nav-link">Home</RouterLink>
      <a @click="authStore.logout()" class="nav-item nav-link">Logout</a>
    </div>
  </nav> -->
