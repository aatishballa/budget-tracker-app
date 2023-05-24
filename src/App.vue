<script setup lang="ts"></script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          Home
        </RouterLink>
        <RouterLink to="/about">
          About
        </RouterLink>
      </nav>

      <div class="bg-red-200 font-semibold">
        Tailwind
      </div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
