<template>
  <div class="flex flex-col min-h-screen">
    <header class="bg-slate-50 p-4">
      <app-bar title="TEST" />
    </header>
    <main class="flex-grow p-4">
      <router-view />
    </main>
    <footer class="bg-slate-50 p-4">
      <bottom-nav-bar />
    </footer>
  </div>
</template>

<script setup lang="ts">
import AppBar from '@/base/AppBar.vue';
import BottomNavBar from '@/base/BottomNavBar.vue';


</script>

<style scoped>

</style>