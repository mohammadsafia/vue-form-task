<template>
  <header class="main-header">
    <div class="logo">
      <router-link to="/home">Vue - Complete Guide</router-link>
    </div>
    <nav class="main-header__nav">
      <ul class="main-header__nav__items">
        <li v-if="!isUserAuth">
          <router-link to="/register">Sign Up</router-link>
        </li>
        <li v-if="!isUserAuth">
          <router-link to="/login">Sign In</router-link>
        </li>
        <li v-if="isUserAuth">
          <router-link to="/home">Home</router-link>
        </li>
        <li v-if="isUserAuth">
          <img @click="logoutHandler" class="icon-btn" src="../../assets/images/logout.svg" alt="logout icon" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    isUserAuth() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    async logoutHandler() {
      await this.$store.dispatch('logoutUserAction');
      await this.$router.push('/login');
    },
  },
};
</script>
