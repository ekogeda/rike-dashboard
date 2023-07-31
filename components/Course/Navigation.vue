<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "darkBlue");

const route = useRoute()
const { data } = await useFetch('/api/course')
const course = await useFetch(`/api/course/${route.params.id}`)

const tem = ref({})
tem.value = course.data.value[0]

const drawer = ref(null);
const knowledge = ref(45);

const totalQuestion = ref(0);
data.value?.courses[0].menu.map((item, i) => {
  totalQuestion.value = item.courseItems.reduce((accumulator, curValue) => {
    return accumulator + curValue[0];
  }, 0);
});


const resources = ref([
  { title: "AirBnB Canvas" },
  { title: "Startbucks Canvas" },
  { title: "NativeLink Canvas" },
  { title: "Black Canvas" },
]);

const emit = defineEmits(["submenu"]);
const onSubMenuClick = (params) => emit("submenu", params);
</script>

<template>
  <v-navigation-drawer v-model="drawer" width="330">
    <v-list-item class="my-3">
      <v-list-item-title class="text-capitalize text-wrap">
        <h3>{{ tem.heading }}: {{ tem.subtitle }}</h3>
      </v-list-item-title>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-group :value="chapter.id" v-for="chapter in tem.menu" :key="chapter.id">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props">
            <v-list-item-title class="text-uppercase text-wrap" style="font-size: 0.8rem">
              {{ chapter?.title }}
            </v-list-item-title>
          </v-list-item>
        </template>

        <v-list-item v-for="(course, i) in chapter.courseItems" :key="i" :prepend-icon="course.icon_cancel" :value="title"
          @click="
            onSubMenuClick({
              id: course.id,
              title: chapter?.title,
              has_question: course.has_question,
              subtitle: course.subtitle,
              img: course.img,
              total: course.total_question,
              course: course,
            })
            " style="padding: 0 1rem !important">
          <v-list-item-title class="text-capitalize text-wrap" style="font-size: 0.9rem; ">{{ course.subtitle
          }}</v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-navigation-drawer>

  <v-app-bar>
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->

    <v-toolbar-title>
      <v-progress-circular :rotate="360" :width="3" :model-value="knowledge" color="success">
        <small style="font-size: 12px">{{ knowledge }}</small>
      </v-progress-circular>
    </v-toolbar-title>

    <v-spacer />

    <v-btn :color="$vuetify.theme.name == 'darkBlue' ? 'yellow darken-3' : ''" size="small" @click="toggleTheme">
      <v-icon>
        {{ $vuetify.theme.name == 'darkBlue' ? 'mdi-weather-night' : 'mdi-weather-sunny' }}
      </v-icon>
    </v-btn>

    <v-btn color="green" size="small" variant="flat" class="mx-2">
      Resources
      <v-menu activator="parent">
        <v-list>
          <v-list-item v-for="(item, index) in resources" :key="index" :value="index">
            <v-list-item-title>{{ item?.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-btn>

    <v-btn to="/training" color="error" variant="outlined" size="small">
      <v-icon>mdi-power</v-icon>
      Save & Exit
    </v-btn>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.active {
  background-color: blue;
  color: white;
}
</style>
