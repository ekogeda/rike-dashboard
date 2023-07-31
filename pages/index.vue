<script setup>
const value = ref(45)
</script>

<template>
  <v-container class="my-5">
    <p>
      Congratulations on completing the
      <strong class="text-capitalize">empowered startups platform</strong> program.
    </p>

    <v-list class="pa-3">
      <v-list-item-title>Criteria for completion
        <v-list-item-subtitle>
          <v-icon>mdi-minus-thick</v-icon>
          Completed all training tasks (excluding optional tasks)
        </v-list-item-subtitle>
        <v-list-item-subtitle>
          <v-icon>mdi-minus-thick</v-icon>
          70% average or better on all lesson knowledge test
        </v-list-item-subtitle>
      </v-list-item-title>
    </v-list>

    <v-btn color="grey-darken-1" class="text-capitalize my-5" rounded="xl">
      <v-icon>mdi-play</v-icon> Watch our orientation video
    </v-btn>

    <v-row class="my-8">
      <v-col cols="12" md="8">
        <v-card class="elevation-5">
          <v-card-title class="text-uppercase">
            <h5>My training</h5>
          </v-card-title>

          <v-divider />

          <div class="py-8 px-4 grid w-100">
            <div class="c-me-3">
              <img src="@/assets/stats.svg" class="w-100 rounded" alt="logo" />
            </div>

            <div>
              <v-list-item-subtitle class="text-uppercase"><small>GSA Module 1</small></v-list-item-subtitle>
              <v-list-item-title class="text-wrap my-3 text-capitalize">
                <NuxtLink to="/" class="text-green">Venture report, pitch & program summary</NuxtLink>
              </v-list-item-title>
            </div>


            <div class="mx-auto">
              <v-progress-circular :size="80" :width="5" :model-value="value" color="success">
                {{ value }}%
              </v-progress-circular>
            </div>
          </div>
        </v-card>

        <v-card class="elevation-5 my-6">
          <h4>
            <v-card-title class="text-uppercase">
              <h5>My pined ventures <v-icon>mdi-pin-outline</v-icon></h5>
            </v-card-title>
          </h4>

          <v-divider />

          <v-card class="elevation-0">
            <v-card-subtitle class="text-uppercase mt-3 d-flex justify-space-between align-center">
              <small>Validation phase</small>
              <v-btn size="x-small" flat icon="mdi-cog"></v-btn>
            </v-card-subtitle>

            <v-card-title>
              <NuxtLink to="/ventures/Afromena Foods Canada" class="text-green">
                <small>Afromena Foods Canada</small>
              </NuxtLink>
              <v-icon>mdi-pin-outline</v-icon>
            </v-card-title>

            <v-row>
              <v-col cols="12" md="8" class="py-0">
                <v-card-text>
                  Improving food chain stability by fixing nutritional disruptions of Afromena immigrants innovative made
                  in Canada Afromena traditional foods.
                </v-card-text>
              </v-col>
              <v-col cols="12" md="4" class="py-0">
                <v-card-text>
                  <ul class="ul">
                    <li v-for="(item) in 4" :key="item">
                      <v-avatar>
                        <v-img class="avatar w-100"
                          :src="'https://randomuser.me/api/portraits/men/4' + `${item}` + '.jpg'" alt="" />
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
              <NuxtLink to="/ventures/Sample venture - Rentaroom.com" class="text-green">
                <small>Sample venture - Rentaroom.com</small>
              </NuxtLink>
              <v-icon>mdi-pin-outline</v-icon>
            </v-card-title>

            <v-row>
              <v-col cols="12" md="8">
                <v-card-text>
                  Online market place to connects guests and hosts.
                </v-card-text>
              </v-col>
              <v-col cols="12" md="4">
                <v-card-text>
                  <ul class="ul">
                    <li v-for="(item) in 1" :key="item">
                      <v-avatar>
                        <v-img class="avatar w-100"
                          :src="'https://randomuser.me/api/portraits/men/4' + `${item}` + '.jpg'" alt="" />
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
      </v-col>


      <v-col cols="12" md="4">
        <v-card class="elevation-5 overflow-y-auto py-3" id="scroll-target" style="max-height: 500px">
          <v-card-title class="text-uppercase">
            <h5>Recent comments</h5>
          </v-card-title>

          <v-divider />

          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar color="grey-darken-3"
                  image="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"></v-avatar>
              </template>

              <v-list-item-title class="font-weight-bold">Shafi T. AKINROPO</v-list-item-title>

              <small class="text-green">Afromena Foods Canada > venture summary</small>
            </v-list-item>
          </v-card-actions>

          <v-card-text>
            Hi Colin, it was a pleasure meeting with Ladan and she shared good insight with us in making our VR submission
            better. I am glad to report that we have done the needful based on advice and we have an improved VR submitted
            on this platform now. Kindly inform us of the next steps so that we can make progress. Best regards.
          </v-card-text>
          <v-card-text class="py-0">#mentorreview</v-card-text>
          <v-card-subtitle>2 weeks ago</v-card-subtitle>

          <v-divider class="mt-3" />

          <div class="response">
            <v-card-actions>
              <v-list-item class="w-100">
                <template v-slot:prepend>
                  <v-avatar color="grey-darken-3" image="https://randomuser.me/api/portraits/men/4.jpg"></v-avatar>
                </template>

                <v-list-item-title class="font-weight-bold">Celin McDonald Mentor 1</v-list-item-title>

                <small class="text-green">Afromena Foods Canada > venture summary</small>
              </v-list-item>
            </v-card-actions>

            <v-card-text>
              Hi Shafi, @akinropo Ok great, thank you. I have made...
            </v-card-text>
            <v-card-text class="py-0">#mentorreview</v-card-text>
            <v-card-subtitle>2 weeks ago</v-card-subtitle>
          </div>
        </v-card>

        <v-card class="elevation-5 my-5 py-3" id="scroll-target" style="max-height: 500px">
          <v-card-title class="text-uppercase">
            <h5>Mentors</h5>
          </v-card-title>

          <v-divider />

          <v-card-actions>
            <v-list-item class="w-100">
              <template v-slot:prepend>
                <v-avatar color="grey-darken-3" image="https://randomuser.me/api/portraits/men/4.jpg"></v-avatar>
              </template>

              <v-list-item-title class="font-weight-bold">Celin McDonald Mentor 1</v-list-item-title>
            </v-list-item>
          </v-card-actions>
        </v-card>

        <v-card class="elevation-5 my-5 py-3" id="scroll-target" style="max-height: 500px">
          <v-card-title class="text-uppercase">
            <h5>Need help? Found a bug?</h5>
          </v-card-title>

          <v-divider />

          <v-card-text>
            We'd like to hear from you if you need support, found a bug or have a question about the Empowered Startups
            Platform.
          </v-card-text>
          <v-card-text>
            We'll respond as soon as possible. <br />
            <NuxtLink to="/" class="text-green">support@rike-sd.io</NuxtLink>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
// .v-progress-circular {
//   margin: 1rem;
// }

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
  background: #66BB6A;
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

// ul:hover li:nth-child(n+2) {
//   margin-left: 1px;
// }

.grid {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

.c-me-3 {
  margin-right: 1rem;
  width: 150px;
}

::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  background: #f5f5f5;
}

::-webkit-scrollbar-thumb {
  background-color: #66BB6A;
  border-radius: 20px;
  border: 3px solid #f5f5f5;
}

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
</style>
