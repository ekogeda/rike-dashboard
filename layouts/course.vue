<script setup>
const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `RIKE-DASH - ${route.meta.title}` }],
});

const step = ref();
const setSubMenu = (params) => (step.value = params);

const subMenu = computed(() => {
  return step.value;
});

provide("stepped", subMenu);

</script>

<template>
  <v-app>
    <CourseNavigation @submenu="setSubMenu" />

    <v-main>
      <slot />

      <TheFooter />
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped></style>
