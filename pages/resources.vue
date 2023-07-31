<script setup>
definePageMeta({
  title: 'Resources'
})

const samples = ref([
  {
    name: 'Personal goal worksheet',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Pitch deck sample slide',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Tips for preparing your prototype',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Prototype sample - rentaroom',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Blank lean canvas',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Blank interview form',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Blank solution interview form',
    description: '',
    type: 'pdf',
  },
  {
    name: 'Blank experiment report form',
    description: '',
    type: 'pdf',
  },
])
</script>
  
<template>
  <v-container class="my-5">
    <p>Here are some downloadable resources to further support your entrepreneurial journey and learning.</p>
    <v-row class="my-2">
      <v-col cols="12" sm="9">
        <v-card class="elevation-5 pa-3">
          <v-table density="comfortable">
            <thead>
              <tr style="font-size:12px">
                <th class="text-left text-uppercase">
                  Name
                </th>
                <th class="text-left text-uppercase">
                  Description
                </th>
                <th class="text-center text-uppercase">
                  File type
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in samples" :key="item.name">
                <td><v-icon>mdi-file-pdf-box</v-icon> <span class="text-green text-capitalize">{{ item.name }}</span>
                </td>
                <td>{{ item.description }}</td>
                <td class="text-center">{{ item.type }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-card>
      </v-col>
      <v-col cols="12" sm="3">
        <v-card class="elevation-5">
          <v-card-title class="text-uppercase text-h6 font-weight-bold">
            Help Center
          </v-card-title>

          <v-divider />

          <v-card-text>
            <NuxtLink to="/resources" class="text-green text-decoration-none">Visit our Help Center</NuxtLink> to answer
            many common questions about RIKE-SD
          </v-card-text>

          <v-card-text>
            <strong>Support</strong> can be found in the bottom right corner of this website
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped></style>