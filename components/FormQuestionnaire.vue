<script setup>
const props = defineProps({ course: Object });
const questionnaire = ref(props.course.questionnaire);
const route = useRoute();

const refreshing = ref(false);
const refreshAll = async () => {
  refreshing.value = true;
  try {
    // await refreshNuxtData()
    await navigateTo({ path: `/course` });
  } finally {
    await navigateTo({ path: `/course/${route.params.id}` });
    refreshing.value = false;
  }
};

const step = ref(1);
const selected = ref([]);
const canSubmit = ref(false);
const answer = ref(true);
const isNext = ref(false);

watch(
  () => [selected.value],
  ([newSelect], [oldSelect]) => {
    if (newSelect != oldSelect) {
      // isNext.value = false;
      canSubmit.value = newSelect.length == 0 ? false : true;

      newSelect.map((item) => {
        answer.value = item.ans;
        if (!item.ans) canSubmit.value = false;
        if (!item.ans && !selected.value.includes(item.val)) wrong.value.push(item);
      });
    }
  }
);

const nextQuestion = () => {
  isNext.value = false;
  step.value++;
};

const wrong = ref([]);
const result = ref(null);
const counter = ref(null);
const onAnswer = () => {
  isNext.value = true;
  canSubmit.value = false;

  counter.value = props.course.total_question - wrong.value.length
  result.value = (
    ((counter.value) / props.course.total_question) *
    100
  ).toFixed(1);
};
</script>

<template>
  <!-- <v-card class="elevation-0 my-5"> -->
  <v-card-title v-if="step <= course.total_question" class="text-h6 font-weight-regular justify-space-between">
    <p class="text-green">Question {{ step }} / {{ course.total_question }}</p>
  </v-card-title>

  <v-window v-model="step">
    <v-window-item :value="question.id" v-for="(question, index) in questionnaire" :key="index">
      <v-card-text>
        <p class="mb-3" style="font-size: 1rem">{{ question.question }}</p>
        <v-checkbox v-model="selected" v-for="(option, index) in question.options" :key="index"
          :color="option.ans ? 'success' : 'error'" :label="option.val" :value="option" hide-details />
        <!-- @change="qObj({ question_id: question.id, option: option })"  -->
      </v-card-text>
    </v-window-item>

    <v-window-item :value="course.total_question + 1">
      <v-card-title class="text-green">
        <h2>Score: {{ result < 0 ? 0 : result }}%</h2>
      </v-card-title>

      <v-card-text>
        In total, you received {{ counter < 0 ? 0 : counter }} of {{ course.total_question }} possible points. <p
          class="font-weight-bold">
          Your final score is {{ result < 0 ? 0 : result }}%. </p>
      </v-card-text>

      <v-card-text v-if="result >= 70">
        Great work - you passed the knowledge check. Click "Exit Quiz" below to proceed
      </v-card-text>
      <v-card-text v-else>
        Oops! - your score is below average. Click
        <v-btn size="x-small" :disabled="refreshing" @click="refreshAll">
          Start over
        </v-btn>
        to re-take the question
      </v-card-text>

      <small class="text-error" v-if="!answer">Wrong answer, try again!</small>
    </v-window-item>
  </v-window>

  <v-card-actions class="my-8">
    <v-btn v-if="step > 1" color="green-darken-3" variant="flat" @click="step--">
      <v-icon>mdi-arrow-left-thin</v-icon>
      Prev
    </v-btn>
    <v-btn v-if="step != course.total_question + 1" color="green-darken-3" variant="flat" @click="onAnswer"
      :disabled="!canSubmit">
      <v-icon>mdi-chevron-triple-up</v-icon>
      Submit
    </v-btn>
    <v-btn v-if="step < course.total_question + 1" color="green-darken-3" variant="flat" :disabled="!isNext"
      @click="nextQuestion">
      Next
      <v-icon>mdi-arrow-right-thin</v-icon>
    </v-btn>
  </v-card-actions>

  <v-card-text class="elevation-5 my-10 text-center mx-1 px-2">
    <p v-if="step != course.total_question + 1">
      There are <strong>{{ course.total_question - step }}</strong> left to answer before
      you proceed
    </p>
  </v-card-text>

  <!-- </v-card> -->
</template>
