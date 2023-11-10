<template>
  <!-- <div id="app"> -->
    <!-- Show NavBar on every page except 'MainPage' and 'account' -->
    <!-- Show MainNavBar only on 'MainPage' and 'account' -->
    <!-- <MainNavBar v-if="showMainNavBar" /> -->
    <!-- <div id="app"> -->
      <NavBar v-if="showNavBar" />
      <router-view />
    <!-- </div> -->
  <!-- </div> -->
</template>

<script>
import NavBar from './components/NavBar.vue';
// import MainNavBar from './components/MainNavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    //MainNavBar
  },
  computed: {
    showNavBar() {
      // Show the NavBar except on 'MainPage' and 'account'
      return !['MainPage', 'account'].includes(this.$route.name);
    },
    // showMainNavBar() {
    //   // Show the MainNavBar on 'MainPage' and 'account'
    //   return ['MainPage', 'account'].includes(this.$route.name);
    // }
  }
};
</script>

<style>
/* Ensure the body takes up the full viewport */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}

/* Set your #app element to also take up the full viewport */
#app {
  min-height: 100%;
  min-width: 100%;
  /* You can add additional styles as needed */
}

/* Style for main-content to potentially take up all available space */
.main-content {
  height: 100%;
  /* Additional styling as per your design */
}
</style>

