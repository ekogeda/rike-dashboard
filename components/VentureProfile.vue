<script setup>
const itemsPerPageArray = ref([3, 6, 9])
const itemsPerPage = ref(3)
const page = ref(1)
const search = ref('')
const sortKey = ref('name')
const sortOrder = ref('asc')

const keys = ref([
  { id: 'Name', title: 'Company Name' },
  { id: 'Description', title: 'Description of product' },
  { id: 'Feature', title: 'Unique features' },
  { id: 'Customer', title: 'Customer segment' },
  { id: 'Price', title: 'Price' },
  { id: 'Website', title: 'Website URL' },
])

const ventures = ref([
  {
    name: 'homestay.com',
    description: 'An online platform that connects travelers with authentic and certified homestay opportunities in some of the world\'s most beautiful and sought after locations.',
    feature: 'Affordable homestay options, vetted group of safe locations, available in tourist locations that would otherwise be expensive to stay in, includes meals',
    customer: 'Young travelers looking for interesting and cheap accommodation',
    price: 50,
    website: 'https://www.homestay.com',
  },
  {
    name: 'cheaprooms.com',
    description: 'An e-commerce website that offers a compilation of the best hotel deals and allows buyer to easily book now.',
    feature: 'One stop shop for cheap hotel rooms, reliable and easy to book and confirm online.',
    customer: 'Middle income travelers looking for cheap hotel rooms',
    price: 75,
    website: 'https://www.cheaprooms.com',
  },
  {
    name: 'Gold start event concierge',
    description: 'A full service concierge product offering a complete range of assistance in booking accommodation, dinning and activities during business events and trade show',
    feature: 'Offers event specific locations and recommendations and full service saving time for busy people',
    customer: 'Busy business people who want a nice place to stay during an event without having a lot of time finding it',
    price: 200,
    website: 'https://goldstarconciergecall.com',
  },
])

const numberOfPages = computed(() => {
  return Math.ceil(ventures.value.length / itemsPerPage.value)
})

const filteredKeys = computed(() => {
  return keys.value.filter(key => key.id !== 'Name')
})

const sortBy = computed(() => {
  return [{
    key: sortKey.value,
    order: sortOrder.value,
  }]
})

const nextPage = () => {
  if (page.value + 1 <= numberOfPages.value) page.value += 1
}

const prevPage = () => {
  if (page.value - 1 >= 1) page.value -= 1
}

</script>

<template>
  <v-data-iterator v-model:items-per-page="itemsPerPage" v-model:page="page" :items="ventures" :search="search"
    :sort-by="sortBy">
    <template v-slot:header>
      <v-toolbar dark color="green" class="px-2 mb-2 c-tool">
        <v-text-field v-model="search" clearable hide-details prepend-inner-icon="mdi-magnify" placeholder="Search"
          variant="solo" density="compact" class="searched"></v-text-field>
        <v-spacer></v-spacer>
        <v-select v-model="sortKey" clearable hide-details :items="keys" :item-value="item => item.id.toLowerCase()"
          prepend-inner-icon="mdi-sort" label="Sort by" variant="solo" density="compact" class="sorted" />
        <v-spacer></v-spacer>
        <v-btn-toggle v-model="sortOrder" mandatory>
          <v-btn size="x-small" color="info" value="asc">
            <v-icon>mdi-arrow-up</v-icon>
          </v-btn>
          <v-btn size="x-small" color="info" value="desc">
            <v-icon>mdi-arrow-down</v-icon>
          </v-btn>
        </v-btn-toggle>
      </v-toolbar>
    </template>

    <template v-slot:no-data>
      <v-alert class="ma-2 text-center text-uppercase" type="warning">No results</v-alert>
    </template>

    <template v-slot:default="props">
      <v-row>
        <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="4">
          <v-card class="elevation-1 ma-1">
            <v-card-title class="subheading font-weight-bold">
              {{ item.raw.name }}
            </v-card-title>

            <v-divider></v-divider>

            <v-list density="compact">
              <v-list-item v-for="(key, index) in filteredKeys" :key="index"
                :class="{ 'text-blue': sortKey === key.id.toLowerCase() }">
                <v-list-item-title>
                  {{ key.title.toUpperCase() }}
                </v-list-item-title>
                {{ String(item.raw[key.id.toLowerCase()]) }}
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <template v-slot:footer>
      <div class="d-flex align-center justify-space-around pa-4">
        <span class="grey--text">Items per page</span>
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="text" color="green" class="ml-2" append-icon="mdi-chevron-down" v-bind="props">
              {{ itemsPerPage }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(number, index) in itemsPerPageArray" :key="index" :title="number"
              @click="itemsPerPage = number"></v-list-item>
          </v-list>
        </v-menu>

        <v-spacer></v-spacer>

        <span class="mr-4
          grey--text">
          Page {{ page }} of {{ numberOfPages }}
        </span>
        <v-btn icon size="small" @click="prevPage">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon size="small" class="ml-2" @click="nextPage">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </template>
  </v-data-iterator>
</template>


<style lang="scss" scoped></style>