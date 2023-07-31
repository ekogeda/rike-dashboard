<script setup>
const route = useRoute();
useHead({
  meta: [{ property: "og:title", content: `RIKE-DASH - ${route.meta.title}` }],
});
</script>

<template>
  <div class="default-layout" :class="$vuetify.theme.name == 'darkBlue' ? '' : 'bg-grey-lighten-2'">
    <v-card>
      <v-layout>
        <TheNavbar />

        <v-main>
          <TheBadge />
          <slot />

          <TheFooter />
        </v-main>
      </v-layout>
    </v-card>
  </div>
</template>

<style scoped></style>
