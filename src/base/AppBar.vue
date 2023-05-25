<template>
  <div class="flex justify-between items-center">
    <div />
    <div class="bg-red-200">
      {{ title }}
    </div>
    <div>
      <slot name="actionButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
}>()
</script>

<style scoped>

</style>