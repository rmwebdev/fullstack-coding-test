<template>
    <div class="register-container">
      <form class="register-form" @submit.prevent="register">
        <h2 class="form-title">Register</h2>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" v-model="confirmPassword" required />
        </div>
        <button type="submit" class="btn-primary">Register</button>
        <router-link to="/login" class="form-link">Already have an account? Login here.</router-link>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      };
    },
    methods: {
      async register() {
        // Call register action from store with name, email and password
        await this.$store.dispatch('auth/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword
        });
        // Redirect to home page after successful registration
        this.$router.push('/');
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .register-form {
    width: 400px;
    padding: 40px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .form-title {
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    display: block;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .btn-primary {
    display: block;
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .form-link {
    display: block;
    text-align: center;
    margin-top: 20px;
    color: #007bff;
    text-decoration: none;
  }
  </style>
  