<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="register">
      <input type="text" placeholder="Username" v-model="username" required />
      <input type="email" placeholder="Email" v-model="email" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <input type="password" placeholder="Confirm Password" v-model="confirmPassword" required />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register() {
      console.log('Register:', this.username, this.email, this.password);
    }
  }
}
</script>

<style scoped lang="less">
div {
  width: 300px;
  margin: 50px auto;
  padding: 20px;
  border: none;
}

h2 {
  text-align: center;
}

input {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #444;
}
</style>
