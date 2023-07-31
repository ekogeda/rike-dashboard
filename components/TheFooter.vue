<script setup>
const links = ref(["", "Training", "Ventures", "Resources"]);
</script>

<template>
  <v-footer color="green-darken-1" class="py-5">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link" :to="`/${link.toLowerCase()}`" color="white" variant="text" class="mx-2"
        rounded="xl">
        {{ link == '' ? 'Dashboard' : link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>RIKE-DASH</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped></style>
