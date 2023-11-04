<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" placeholder="Email/Username" v-model="username" required />
      <input type="password" placeholder="Password" v-model="password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      console.log('Login:', this.username, this.password);
      // Mock login validation
      if (this.username && this.password) {
        // Redirect to the main page
        this.$router.push({ name: 'MainPage' });
      }
    }
  }
/*
  methods: {
    async login() {
      try {
        console.log('Login:', this.username, this.password);
        
        // This is where you would implement the actual login logic.
        // For demonstration purposes, we'll just simulate an API call with a timeout.
        const response = await new Promise((resolve, reject) => {
          setTimeout(() => {
            // This is where you would resolve with an actual response from an API.
            resolve({ success: true });
          }, 1000);
        });

        if (response.success) {
          // Redirect to the main page
          this.$router.push({ name: 'MainPage' });
        } else {
          // Handle login failure (e.g., wrong credentials)
          console.error('Login failed: Invalid credentials');
          // Here you should set an error message in your data to be displayed to the user.
        }
      } catch (error) {
        // Handle errors (e.g., network error, server error)
        console.error('Login error:', error);
        // Set an error message in your data to be displayed to the user.
      }
    }
  }
  */
}
</script>


<style>
div {
  justify-content: center;
  align-items: center;
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
  padding: 0px;
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
    align:center;
  background-color: #444;
}
</style>
