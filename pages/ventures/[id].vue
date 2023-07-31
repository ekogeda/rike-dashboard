<script setup>
definePageMeta({ title: 'Venture title' })
const route = useRoute()

const id = ref()
id.value = route.params.id

const tab = ref(null)
const tabInner = ref(null)
const MOP = ref(['One-time', 'Monthly', 'Yearly'])
const years = ref(10)
</script>
 
<template>
  <v-container class="my-5">
    <v-card>
      <v-tabs v-model="tab" bg-color="green-darken-1" align-tabs="center" center-active>
        <v-tab class="tab" value="one"><v-icon>mdi-handshake</v-icon>Business models & validation</v-tab>
        <v-tab class="tab" value="two"><v-icon>mdi-chart-bell-curve-cumulative</v-icon>Traction models</v-tab>
        <v-tab class="tab" value="three"><v-icon>mdi-account-circle</v-icon>Competitor profiles</v-tab>
        <v-tab class="tab" value="four"><v-icon>mdi-pen-lock</v-icon>Prototypes</v-tab>
        <v-tab class="tab" value="five"><v-icon>mdi-lightbulb-on-20</v-icon>Venture report</v-tab>
        <v-tab class="tab" value="six"><v-icon>mdi-file-document-multiple</v-icon>My documents</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="one">
            <h2 class="text-center my-5">Plan B - Solution Interviews <small><v-icon>mdi-pencil</v-icon></small></h2>

            <v-card>
              <v-tabs v-model="tabInner" color="green" bg-color="dark" align-tabs="center">
                <v-tab class="tab" value="one">Canvas</v-tab>
                <v-tab class="tab" value="two">Experiment plant</v-tab>
                <v-tab class="tab" value="three">Validation interviews</v-tab>
                <v-tab class="tab" value="four">Experiment report</v-tab>
              </v-tabs>

              <v-card-text>
                <v-window v-model="tabInner">
                  <v-window-item value="one">
                    <v-card class="elevation-3 mb-2">
                      <v-card-title class="d-flex justify-space-between text-capitalize">
                        Canvas coming soon..!
                      </v-card-title>
                    </v-card>
                  </v-window-item>

                  <v-window-item value="two">
                    <v-card class="elevation-3 mb-2">
                      <v-card-title class="d-flex justify-space-between text-capitalize">
                        Experiment plant coming soon..!
                      </v-card-title>
                    </v-card>
                  </v-window-item>

                  <v-window-item value="three">
                    <v-card class="elevation-3 mb-2">
                      <v-card-title class="d-flex justify-space-between text-capitalize">
                        Validation interviews coming soon..!
                      </v-card-title>
                    </v-card>
                  </v-window-item>

                  <v-window-item value="four">
                    <v-card class="elevation-3 mb-2">
                      <v-card-title class="d-flex justify-space-between text-capitalize">
                        Experiment report coming soon..!
                      </v-card-title>
                    </v-card>
                  </v-window-item>
                </v-window>
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item value="two">
            <h2 class="text-center my-5">Traction Model <small><v-icon>mdi-pencil</v-icon></small></h2>

            <v-form>
              <v-row>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details label="Enter Your Minimum Success Criteria"
                    prepend-inner-icon="mdi-currency-usd" suffix="per year" density="compact"
                    variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details label="Enter Customer Payment" prepend-inner-icon="mdi-currency-usd"
                    density="compact" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-select hide-details :items="MOP" clearable density="compact" label="Payment Frequency"
                    variant="outlined" prepend-inner-icon="mdi-calendar-clock"></v-select>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field hide-details label="Lifetime Of Customer" prepend-inner-icon="mdi-currency-usd"
                    suffix="years" density="compact" variant="outlined" v-model="years"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details label="Acquisition Rate" append-inner-icon="mdi-percent-outline"
                    density="compact" variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" sm="4">
                  <v-text-field hide-details label="Conversion Rate" append-inner-icon="mdi-percent-outline"
                    density="compact" variant="outlined"></v-text-field>
                </v-col>

                <v-col cols="12" class="mb-3 text-end">
                  <v-btn type="button" color="green-darken-3" rounded="xl" :loading="loading" class="text-capitalize">
                    Generate Model
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-window-item>

          <v-window-item value="three">
            <h2 class="text-center my-5">Competitor profiles <small><v-icon>mdi-pencil</v-icon></small></h2>
            <VentureProfile />
          </v-window-item>

          <v-window-item value="four">
            <h2 class="text-center my-5">Prototypes</h2>

            <v-row>
              <v-col cols="12" sm="4">
                <div style="width:200px">
                  <FileUploader />
                </div>
              </v-col>
              <v-col cols="12" sm="8">
                <v-list>
                  <v-list-item>
                    <v-list-item-title class="text-green">
                      {{ $route.params.id + '.pdf' }}
                    </v-list-item-title>

                    <strong>Shafi A. AKINROPO</strong>
                    <p>Feb 15, 2023</p>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
          </v-window-item>

          <v-window-item value="five" class="pa-2">
            <h2 class="text-center my-5">Venture Report</h2>
            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Overview
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>An executive summary that identifies the size of the market, makes reference to the problem,
                report on general opportunity for the solution, calls out the global customer segment and reference the
                scalability of the opportunity.</v-card-text>

              <v-card-text>The immigration policy of the Government of Canada and the opportunities provided by the
                country for new immigrants have made many immigrants across the world to choose as their Canada new home.
                The population of Nigerians with permanent resident permit has rose geometrically over the years and still
                on the increase climaxing at cumulative figure of 67,560 between 2018 - 2022 (IRCC, 2023). Ontario
                province is home to 62.3% Nigerian immigrants and 50% lives in Toronto with the projected total population
                of the city reaching 2.89Million in 2023. Over 50% of Toronto residence are none native and foreign born
                made up of ethnically diverse population according to populationstat.com.</v-card-text>

            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Problems to be solved
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                Specific description of the top problems and references supporting its presence.
              </v-card-text>
              <v-card-text>
                <ol class="ms-5">
                  <li>Availability of Afromena foods are limited in Canada despite the year on year growth in the number
                    of immigrants choosing Canada especially Ontario province as their new homes. The focasted rise in
                    future shall aggravate the traditional Afromena food availability challenges in Canada.</li>
                  <li>Accessibility of the imported traditional Afromena food that are sparsely distributed in Ontario
                    province area with huge population of Afromena immigrants is challenging as many have to travel to
                    other cities to get few traditional food items.</li>
                </ol>
              </v-card-text>

            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Solution
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                Broad description of the solution with specific reference to critical features and Unique Value
                Propositions.
              </v-card-text>
              <v-card-text>
                Our innovative and scalable solutions shall position the proposed venture as a change maker by improving
                the supply chain of traditional Afromena food in Canada through the design development and deployment of
                realtime online Virtual Warehouse in a bid to facilitate the visibility of the available on farm, fresh
                and traceable products at the country of origin.
              </v-card-text>
            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Uniques value proposition (UVP)
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                A brief statement why people will use or buy your solution. What is unique about it and why is it so
                valuable.
              </v-card-text>
              <v-card-text>
                Delivering your home food in your new Canada homes using realtime online availability, accessibility,
                affordability, traceability solution.
              </v-card-text>
            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Target market
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                Customer segment(s) details supported by justification and explanation of customer channel access.
              </v-card-text>
              <v-card-text>
                The early adopter buyer customer will be Millennia conference and festival goers across America. With any
                large festival, conference or event comes a huge influx of visitors who need a place to stay as hotel
                space is generally limited or sold out.
              </v-card-text>
            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Revenue model
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                General overview of how you will make money including fixed and variable costs - business archetype -
                traction model.
              </v-card-text>
              <v-card-text>
                The venture will use a marketplace business model and generate revenue by charging 6-12% booking fee to
                buyers and a 3% fee to sellers.
              </v-card-text>
            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Founders
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                Outline the skill-sets that each founder brings to the business and their formal role. Please also include
                the percentage of shares that each founder will own in the business to be incorporated in Canada and the
                city you intend to be the initial base of operations for the Company. Please also indicate which founders,
                if any, will apply for a work permit to come to Canada initially. We can support any founders who want to
                apply for a work permit at a later stage also, but if anyone intend to apply for a work permit right away
                we need to know this now.
              </v-card-text>
            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Advisors
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                A team of global advisors <strong>from your personal or professional networks</strong> complete with
                title, company and value they will bring to the venture.
              </v-card-text>
              <v-card-text>
                <ol class="ms-5">
                  <li>(name), (title/position), (company/organization), (location) - (single statement about what
                    expertise the advisor brings to the project)</li>
                  <li>James Miller, CEO, Up North Properties, Chicago, USA - as CEO of Chicago's largest property
                    management group, James will be able to provide expert advice on rental guidelines and pricing based
                    on the fluctuation of property values across the country.</li>
                </ol>
              </v-card-text>

            </v-card>

            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                References
                <v-btn color="green" size="small" variant="text" icon="mdi-pencil"></v-btn>
              </v-card-title>
              <v-card-text>
                Current and reputable sources in <strong>MLA citation</strong> format.
              </v-card-text>
              <v-card-text>
                Blackall, Molly. "Global Tourism Hits Record Highs - but Who Goes Where On Holiday?" The Guardian,
                Guardian News and Media, 1 July 2019,
                www.theguardian.com/news/2019/jul/01/global-tourism-hits-highs-but-who-goeswhere-on-holiday.
              </v-card-text>

            </v-card>
          </v-window-item>

          <v-window-item value="six" class="pa-2">
            <h2 class="text-center my-5">My documents</h2>
            <v-card class="elevation-3 mb-2">
              <v-card-title class="d-flex justify-space-between text-capitalize">
                Coming soon..!
              </v-card-title>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>

    <div class="my-10">
      <h3 class="my-8">Discussion & Feedback</h3>
      <div class="d-flex justify-space-between">
        <v-avatar class="me-8">
          <v-img class="avatar w-100" :src="'https://randomuser.me/api/portraits/men/4.jpg'" alt="" />
          <v-tooltip activator="parent" location="bottom">Founder</v-tooltip>
        </v-avatar>

        <div>
          <v-textarea hide-details bg-color="white" color="black" auto-grow variant="solo" rows="3" row-height="25"
            shaped></v-textarea>
          <small>
            <v-icon>mdi-information-slab-circle</v-icon> <strong>Email a comment to a team member</strong> using the
            @ before their name. For example: If you had a team member, James Miller, type @James. When the name appears
            below the comment window in a selection list, click this name.
          </small>
        </div>
      </div>

      <div class="text-end my-3">
        <strong class="text-capitalize me-8">Request review by member</strong>
        <v-btn color="green-darken-3" rounded="xl">Post</v-btn>
      </div>
    </div>
  </v-container>
</template>
 
 
<style lang="scss" scoped>
.tab {
  font-size: 11px;
}
</style>