<script setup></script>

<template>
  <div class="badge-section text-white d-flex align-center">
    <div v-if="$route.name == 'index'" class="bg-green rounded-circle pa-5 badge d-flex align-center justify-center">
      <h3>Badge</h3>
    </div>

    <v-container>
      <h2 class="text-uppercase" :class="$route.name != 'index' ? 'text-center' : ''">
        {{ $route.name == 'index' ? 'Hello User!' : ($route.params.id == null) ? $route.name.toUpperCase() :
          $route.params.id }}
      </h2>
    </v-container>
  </div>
</template>

<style scoped>
.badge-section {
  position: relative;
  height: 100px;
  background-image: url("/assets/line1.jpg");
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
}

.badge {
  position: absolute;
  right: 300px;
  bottom: -150px;
  width: 200px;
  height: 200px;
  text-align: center;
  z-index: 1;
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
  .badge {
    right: 20px;
    bottom: 5px;
    width: 90px;
    height: 90px;
    padding: 5px !important;
  }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
  .badge {
    right: 20px;
    bottom: -100px;
    width: 150px;
    height: 150px;
  }
}

/* Medium devices (landscape tablets, 768px and up) */
/* @media only screen and (min-width: 768px) {} */

/* Large devices (laptops/desktops, 992px and up) */
/* @media only screen and (min-width: 992px) {} */

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
  .badge {
    right: 300px;
    bottom: -150px;
    width: 200px;
    height: 200px;
  }
}
</style>
