<template>
  <div id="app">
    <NavBar/>
    <div class="main-content">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.main-content {
  padding-top: 6px; /* Adjust this value based on navbar height */
}
</style>
