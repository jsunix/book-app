<template>
  <div class="login-content">
      <div class="login-form">
          <h3>Login</h3>
          <h5>Enter Password <br> {{ errmsg }}</h5>
          <input type="password" v-model="password">
          <button @click="login()">Login</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'loginPage',
  components: {
  },
  
  data() {
      return {
          password: '',
          errmsg: '',
          itsDisabled: true
      }
  },

  methods: {
      login() {
          if (this.password != 'password') {
              this.errmsg = 'Wrong Password';
          } else {
              localStorage.setItem('authToken', 'true');
              this.$router.push('/shop')
          }
      }
  }
};

</script>