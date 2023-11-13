<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped lang="less">
nav {
  background-color: #333;
  padding: 10px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

nav a {
  color: white;
  margin: 0 15px;
  text-decoration: none;
  font-weight: bold;
}

nav a:hover {
  color: #ddd;
}
</style>
