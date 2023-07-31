<script setup>
const props = defineProps({ stepper: Object });

const stepper = computed(() => {
  return props.stepper
})

</script>

<template>
  <v-card class="elevation-0 my-5">

    <v-window v-model="stepper.id">
      <v-window-item :value="stepper.id">
        <FormQuestionnaire v-if="stepper.has_question" :course="stepper.course" />

        <template v-else>
          <v-row class="align-items-center">
            <v-col cols="12" sm="4" v-if="stepper.subtitle == 'Conclusion' && stepper.img != ''">
              <v-card-text class="px-2">
                <v-img width="300" class="mx-auto" :src="stepper.img" cover></v-img>
              </v-card-text>
            </v-col>
            <v-col cols="12" :sm="stepper.subtitle == 'Conclusion' ? 8 : ''">
              <div v-for="(text, index) in  stepper.course.text " :key="index">
                <v-card-text v-if="text.includes('soon')" v-text="stepper.subtitle + ' ' + text" />
                <v-card-text v-else-if="text.includes('Click')">
                  <v-alert color="green-lighten-4">{{ text }}</v-alert>
                </v-card-text>
                <v-card-text v-else v-text="text"></v-card-text>
              </div>
            </v-col>
          </v-row>
        </template>

      </v-window-item>

    </v-window>

    <v-card-actions v-if="stepper.has_question" class="justify-center mb-10">
      <v-btn color="green-darken-3" variant="flat" to="/training">
        <v-icon>mdi-arrow-left-thin</v-icon>
        Exit quiz
      </v-btn>
      <!-- <v-btn color="green-darken-3" variant="flat">
        Continue
        <v-icon>mdi-arrow-right-thin</v-icon>
      </v-btn> -->
    </v-card-actions>
  </v-card>
</template>

<style lang="scss" scoped></style>
