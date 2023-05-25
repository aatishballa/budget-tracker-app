<template>
  <v-icon :name="icon" />
</template>

<script setup lang="ts">

const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  to: {
    type: String,
    required: true
  }
})


</script>

<style scoped>

</style>