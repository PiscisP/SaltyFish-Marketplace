<template>
  <div id="app">
    <!-- Show NavBar on every page except 'MainPage' and 'account' -->
    <NavBar v-if="showNavBar" />
    <!-- Show MainNavBar only on 'MainPage' and 'account' -->
    <MainNavBar v-if="showMainNavBar" />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import MainNavBar from './components/MainNavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    MainNavBar
  },
  computed: {
    showNavBar() {
      // Show the NavBar except on 'MainPage' and 'account'
      return !['MainPage', 'account'].includes(this.$route.name);
    },
    showMainNavBar() {
      // Show the MainNavBar on 'MainPage' and 'account'
      return ['MainPage', 'account'].includes(this.$route.name);
    }
  }
};
</script>

<style>
/* Your existing styles */
</style>
