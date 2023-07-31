<script setup>
import { useTheme } from "vuetify";
const theme = useTheme();
const toggleTheme = () =>
  (theme.global.name.value = theme.global.current.value.dark ? "light" : "darkBlue");

const drawer = ref(false);
const group = ref(null);
const menuItems = ref([
  {
    title: "Dashboard",
    value: "",
  },
  {
    title: "Training",
    value: "training",
  },
  {
    title: "Ventures",
    value: "ventures",
  },
  {
    title: "Resources",
    value: "resources",
  },
]);
</script>

<template>
  <v-app-bar color="green-lighten-1" prominent>

    <v-toolbar-title>
      <v-avatar rounded="0">
        <img src="@/assets/logo.png" loading="lazy" class="w-100" alt="logo" />
      </v-avatar>
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn :color="$vuetify.theme.name == 'darkBlue' ? 'yellow darken-3' : ''" :icon="$vuetify.theme.name == 'darkBlue' ? 'mdi-weather-night' : 'mdi-weather-sunny'
      " size="small" elevation="1" @click="toggleTheme">
    </v-btn>

    <v-toolbar-items variant="text" class="hidden-xs">
      <v-hover v-for="menu in menuItems" :key="menu.title">
        <template v-slot:default="{ isHovering, props }">
          <v-btn variant="text" v-bind="props" :color="isHovering ? 'text-secondary' : undefined">
            <NuxtLink :to="`/${menu.value}`" class="text-decoration-none py-4"
              :class="isHovering ? 'text-secondary' : 'text-white'">
              {{ menu.title }}
            </NuxtLink>
          </v-btn>
        </template>
      </v-hover>
    </v-toolbar-items>

    <v-btn class="text-none" stacked>
      <v-badge content="6" color="red-darken-3">
        <v-icon>mdi-bell-outline</v-icon>
      </v-badge>
    </v-btn>

    <v-btn>
      <v-avatar size="small">
        <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" class="w-100 h-100" alt="John" />
      </v-avatar>
    </v-btn>

    <v-app-bar-nav-icon class="hidden-sm-and-up" variant="text" @click.stop="drawer = !drawer" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="bottom" temporary>

    <v-list v-for="menu in menuItems" :key="menu">
      <v-btn :to="`/${menu.title == 'Dashboard' ? '' : menu.title.toLowerCase()}`" variant="text" class="mx-2"
        rounded="xl">
        {{ menu.title }}
      </v-btn>
    </v-list>
    <!-- <v-list :items="menuItems"></v-list> -->
  </v-navigation-drawer>
</template>

<style lang="scss" scoped>
.router-link-active {
  font-weight: bold;
}

.router-link-exact-active {
  color: #91ffb7 !important;
  // color: #03dac6 !important;
}
</style>
