<script setup>
const stepper = inject('stepped')
</script>

<template>
  <template v-if="stepper?.title">
    <v-card class="elevation-0 my-8">
      <v-card-title>
        <h1 class="text-green">{{ stepper?.title.includes(':') ? stepper?.title.split(': ')[1] : stepper?.title }}</h1>
      </v-card-title>
      <v-card-subtitle>
        <em>{{ stepper.subtitle }}</em>
      </v-card-subtitle>
    </v-card>

    <FormQuest :stepper="stepper" />
  </template>

  <div v-else class="h-100" style="display:grid;align-items:center;justify-content:center;min-height: 72vh;">
    <div>
      <h1>Welcome!</h1>
      <p>Kindly start your course by opening the left side bar and select a course.</p>
    </div>
  </div>

  <!-- <Step /> -->
</template>


<style lang="scss" scoped></style>