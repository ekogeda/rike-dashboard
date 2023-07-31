<script setup>
definePageMeta({ title: 'Training' })

const { data } = await useLazyFetch('/api/course')
const model = ref(85)
const completed = ref(100)
const isCompleted = ref(['success'])
</script>
  
<template>
  <v-container class="my-5">
    <v-expansion-panels>
      <v-expansion-panel class="cardContent mb-8" v-for="course in  data?.courses " :key="course.id">
        <v-expansion-panel-title class="border-0 border-b px-0">
          <div class="py-8 px-4 grid grid-1-3-1 w-100">
            <div class="c-me-3">
              <img :src="course?.img" class="w-100 rounded" alt="logo" />
            </div>

            <div class="my-3">
              <v-list-item-subtitle class="text-uppercase"><small>{{ course.title }}</small></v-list-item-subtitle>
              <v-list-item-title class="text-wrap my-3 text-green text-capitalize">
                {{ course.subtitle }}
              </v-list-item-title>

              <div class="d-flex justify-space-between custom-position">
                <v-list-item-subtitle class="mb-3" style="font-size:0.8rem">
                  Estimated time to complete:
                  <strong>{{ course.estimated_time }}</strong>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-3" style="font-size:0.8rem">
                  Started: <strong>{{ course.started }}</strong>
                </v-list-item-subtitle>
                <v-list-item-subtitle class="mb-3" style="font-size:0.8rem">
                  Completed: <strong>{{ course.completed }}</strong>
                </v-list-item-subtitle>
                <v-list-item-subtitle style="font-size:0.8rem">
                  Lesson Score: <strong>{{ course.score }}%</strong>
                </v-list-item-subtitle>
              </div>
            </div>


            <div class="mx-auto">
              <v-progress-circular :size="80" :width="5" :model-value="course.score" color="success">
                {{ course.score }}%
              </v-progress-circular>
            </div>
          </div>

          <template v-slot:actions="{ expanded }">
            <v-icon class="icon pa-4 bg-white" :color="!expanded ? '' : 'teal'"
              :icon="expanded ? 'mdi-chevron-up' : 'mdi-chevron-down'"></v-icon>
          </template>
        </v-expansion-panel-title>

        <v-expansion-panel-text class="py-5">
          <div class="grid grid-1-4">
            <div class=""></div>
            <div class="">
              <h5 class="text-uppercase mb-1">Lesson</h5>

              <v-card class="pa-3 mb-8">
                <v-card-actions>
                  <v-row class="align-center">
                    <v-col cols="12" sm="3">
                      <v-btn :to="'/course/' + `${course.id}`" color="green-darken-3" variant="flat" rounded="xl"
                        class="text-capitalize">
                        <v-icon>mdi-play</v-icon> Review lesson
                      </v-btn>
                    </v-col>
                    <v-col cols="12" sm="3" style="font-size:smaller">
                      <strong>{{ course.interactive_time }} mins - </strong> Interactive Lessons
                    </v-col>
                    <v-col cols="12" sm="3" style="font-size:smaller">
                      <strong>50% of total</strong>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <v-progress-linear v-model="course.score" color="success" height="25">
                        <template v-slot:default="{ value }">
                          <strong>{{ Math.ceil(value) }}%</strong>
                        </template>
                      </v-progress-linear>
                    </v-col>
                  </v-row>
                </v-card-actions>
              </v-card>

              <h5 class="text-uppercase mb-1">Assignment</h5>
              <v-card class="mb-8 elevation-5" v-for="(assign, index) in course.assignment" :key="index">
                <v-card-actions>
                  <v-list-item class="w-100">
                    <template v-slot:prepend>
                      <v-icon size="x-large" color="green-darken-3">{{ assign.icon }}</v-icon>
                    </template>

                    <v-list-item-subtitle><small>Task {{ assign.task_number }}</small></v-list-item-subtitle>
                    <v-list-item-title class="text-capitalize">{{ assign.task_title }}</v-list-item-title>
                  </v-list-item>
                </v-card-actions>

                <v-divider></v-divider>

                <!-- <template v-if="assign.task_number == '1.1'"> -->
                <v-card-text v-for="(paragraph, index) in assign.task_paragraphs" :key="index" v-html="paragraph" />

                <div v-for="task in assign.task_info" :key="task.id">
                  <v-card-text v-if="task.text != ''">{{ task.text }}</v-card-text>

                  <ul class="ms-10" v-if="task.id == 1">
                    <li style="font-size:0.9rem" v-for="(list, index) in task.instruction" :key="index">
                      <span v-html="list" />
                    </li>
                  </ul>
                  <ol class="ms-10" v-else>
                    <li style="font-size:0.9rem" v-for="(list, index) in task.instruction" :key="index">
                      <span v-html="list" />
                    </li>
                  </ol>
                </div>

                <v-card-text
                  v-if="assign.task_subtitle != '' || assign.task_subtitle_complete != '' || assign.task_list_complete.length != 0 || assign.task_lists.length != 0">
                  <template v-if="assign.task_subtitle != ''">
                    {{ assign.task_subtitle }}
                  </template>
                  <template v-if="assign.task_subtitle_complete != ''">
                    {{ assign.task_subtitle_complete }}
                  </template>

                  <ol class="ms-5 my-5">
                    <template v-if="assign.task_list_complete.length != 0">
                      <li v-for="(list, index) in assign.task_list_complete" :key="index">
                        <span v-html="list" />
                      </li>
                    </template>
                    <template v-if="assign.task_lists.length != 0">
                      <li v-for="(list, index) in assign.task_lists" :key="index">
                        <span v-html="list" />
                      </li>
                    </template>
                  </ol>
                </v-card-text>

                <v-card-text v-if="assign.task_note != ''" v-html="assign.task_note" />

                <v-card-text v-if="assign.task_note.includes('button')">
                  <v-btn color="info" class="text-capitalize mb-3">
                    <v-icon>mdi-linkedin</v-icon> &nbsp;
                    Add to profile
                  </v-btn>
                  <p><strong>Name: </strong> Certified Empowered Startup</p>
                  <p><strong>Issuing Organization: </strong> Empowere Startups</p>
                  <p><strong>This credential does not expire: </strong> CHECKED</p>
                  <p><strong>Credential URL: </strong>
                    <NuxtLink class="text-green" to="https://esplatform.ca/certified-by-empowered-startups"
                      target="_blank">
                      https://esplatform.ca/certified-by-empowered-startups</NuxtLink>
                  </p>
                </v-card-text>

                <template v-if="assign.messages.length > 0">
                  <v-card-text class="pb-0">
                    <h5>Set your meeting with mentor</h5>
                  </v-card-text>
                  <v-card-text v-for="(message, index) in assign.messages" :key="index">
                    <v-avatar size="36px" class="me-3">
                      <v-img v-if="message.avatar != ''" alt="Avatar" :src="message.avatar"></v-img>
                      <p v-else class="rounded-circle pa-4" :class="`bg-${message.color}`" v-text="message.initial" />
                    </v-avatar>

                    <NuxtLink :to="{ path: '/training' }" class="text-green">{{ message.excerpt }}</NuxtLink>
                  </v-card-text>

                </template>

                <v-alert v-if="assign.completed" color="green-lighten-5" class="mt-8 rounded-0">
                  <div class="d-flex flex-wrap align-center justify-content-between">
                    <v-checkbox v-model="isCompleted" label="I have completed this task" color="success" value="success"
                      class="text-capitalize" hide-details readonly></v-checkbox>

                    <p class="font-weight-bold">
                      {{ completed - 75 }}% of total
                      <v-progress-circular :size="40" :width="5" :model-value="completed" color="success"
                        style="font-size:10px">
                        {{ completed }}%
                      </v-progress-circular>
                    </p>
                  </div>
                </v-alert>

              </v-card>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>


<style lang="scss" scoped>
.cardContent {
  position: relative;
  // padding: 1rem;
  // background: #bdf094;
  // border-radius: 10px;
  overflow: visible;

  .icon {
    position: absolute;
    border: 5px solid #e0e0e0;
    font-size: 2.5rem;
    border-radius: 50%;
    bottom: -20px;
    right: 50%;
    transform: translate(50%);
    // background: #bdf094;
    // z-index: 100;
  }
}

.grid {
  display: grid;
  align-items: center;
}

.grid-1-3-1 {
  grid-template-columns: 1fr 3fr 1fr;
}

.grid-1-4 {
  grid-template-columns: 1fr 4fr;
}

.c-me-3 {
  margin-right: 1rem;
  width: 150px;
}

/* Small devices (portrait tablets and large phones, 600px and up) */
/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }

  .c-me-3 {
    margin: 0 auto;
  }

  .custom-position {
    flex-direction: column;
  }
}

/* Extra small devices (phones, 600px and down) */
// @media only screen and (min-width: 600px) {
//   .grid {
//     grid-template-columns: 1fr;
//   }
// }
</style>