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
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      console.log('Login:', this.username, this.password);
      // Mock login validation
      if (this.username && this.password) {
        // Redirect to the main page
        this.$router.push ({ name: 'MainPage' });
      }
    }
  }

  // async login() {
  //     try {
  //       console.log('Login:', this.username, this.password);
        
  //       // Send a POST request to the backend 
  //       const response = await axios.post('/login', {
  //         username: this.username,
  //         password: this.password
  //       });

  //       // Check response and redirect or show error
  //       if (response.data.code === 'OK') {
  //         this.$router.push({ name: 'MainPage' });
  //       } else {
  //         this.errorMessage = 'Invalid login credentials';
  //       }
  //     } catch (error) {
  //       console.error('Login error:', error);
  //       this.errorMessage = 'Error logging in';
  //     }
  //   }
}
</script>


<style scoped lang="less">
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
  //color: rgb(4, 4, 4);
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
    align:center;
  background-color: #444;
}
</style>
