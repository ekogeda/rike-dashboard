<script setup>
definePageMeta({ title: 'Ventures' });

</script>
  
<template>
  <v-container class="my-5">
    <v-row>
      <v-col cols="12" sm="4">
        <v-text-field hide-details label="Search" prepend-inner-icon="mdi-magnify" variant="solo" density="compact" />
      </v-col>
      <v-col cols="12" sm="4">
        <v-select clearable label="Select" :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          variant="solo" density="compact" hide-details />
      </v-col>
    </v-row>

    <v-card class="my-6 elevation-5">
      <v-toolbar>
        <v-toolbar-title class="text-uppercase">
          <h5>My Ventures</h5>
        </v-toolbar-title>

        <template v-slot:append>
          <v-btn color="green-darken-3" variant="flat" size="small" icon="mdi-plus"></v-btn>
        </template>
      </v-toolbar>

      <v-divider />

      <v-card class="elevation-0">
        <v-card-subtitle class="text-uppercase mt-3 d-flex justify-space-between align-center">
          <small>Validation phase</small>
          <v-btn size="x-small" flat icon="mdi-cog"></v-btn>
        </v-card-subtitle>

        <v-card-title>
          <NuxtLink to="/ventures/Afromena Foods Canada" class="text-green">Afromena Foods Canada</NuxtLink>
          <v-icon>mdi-pin-outline</v-icon>
        </v-card-title>

        <v-row>
          <v-col cols="12" md="8" class="py-0">
            <v-card-text>
              Improving food chain stability by fixing nutritional disruptions of Afromena immigrants innovative made in
              Canada
              Afromena traditional foods.
            </v-card-text>
          </v-col>
          <v-col cols="12" md="4" class="py-0">
            <v-card-text>
              <ul class="ul">
                <li v-for="(item) in 5" :key="item">
                  <v-avatar>
                    <v-img class="avatar w-100" :src="'https://randomuser.me/api/portraits/men/4' + `${item}` + '.jpg'"
                      alt="" />
                    <v-tooltip activator="parent" location="bottom">Founder</v-tooltip>
                  </v-avatar>
                </li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>

        <v-card-text>
          <strong>Working On:</strong> My Documents (2 weeks ago)
        </v-card-text>
      </v-card>

      <v-divider />

      <v-card class="elevation-0">
        <v-card-subtitle class="text-uppercase mt-3">
          <small>Validation phase</small>
        </v-card-subtitle>

        <v-card-title>
          <NuxtLink to="/ventures/Sample venture - Rentaroom.com" class="text-green">Sample venture - Rentaroom.com
          </NuxtLink>
          <v-icon>mdi-pin-outline</v-icon>
        </v-card-title>

        <v-row>
          <v-col cols="12" md="8" class="py-0">
            <v-card-text>
              Online market place to connects guests and hosts.
            </v-card-text>
          </v-col>
          <v-col cols="12" md="4" class="py-0">
            <v-card-text>
              <ul class="ul">
                <li v-for="(item) in 1" :key="item">
                  <v-avatar>
                    <v-img class="avatar w-100" :src="'https://randomuser.me/api/portraits/men/4' + `${item}` + '.jpg'"
                      alt="" />
                    <v-tooltip activator="parent" location="bottom">Founder</v-tooltip>
                  </v-avatar>
                </li>
              </ul>
            </v-card-text>
          </v-col>
        </v-row>

        <v-card-text>
          <strong>Working On:</strong> Unknown at this time.
        </v-card-text>
      </v-card>

    </v-card>

  </v-container>
</template>


<style lang="scss" scoped>
.ul {
  list-style-type: none;
}

li {
  // width: 50px;
  // height: 50px;
  border-radius: 50%;
  border: 2px solid white;
  display: inline-block;
  position: relative;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  -webkit-transition: .2s ease;
  transition: .2s ease;
}

li:nth-child(1) {
  background: blue;
}

li:nth-child(2) {
  background: green;
}

li:nth-child(3) {
  background: purple;
}

li:nth-child(4) {
  background: tomato;
}

li:nth-child(n+2) {
  margin-left: -3px;
}

ul:hover li:nth-child(n+2) {
  margin-left: 1px;
}
</style>