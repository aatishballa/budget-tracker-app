<template>
  <component :is="currentLayout" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue';
import { useRoute } from 'vue-router'

const DefaultLayout = defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'));
const FullPageLayout = defineAsyncComponent(() => import('@/layouts/FullPageLayout.vue'));

const $route = useRoute()

interface LayoutComponents {
  [key: string]: typeof DefaultLayout | undefined
}

const layoutComponents: LayoutComponents = {
  default: DefaultLayout,
  fullpage: FullPageLayout,
  //third: ThirdLayout,
  // Add more layout components as needed
};

const currentLayout = computed(() => {
  const layout = $route.meta.layout || 'default'; // Use the default layout if no layout is specified
  return layoutComponents[layout as string] || DefaultLayout;
});


</script>