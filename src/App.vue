<template>
  <div id="app">
    <the-header />
    <the-login/>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
import TheLogin from './components/auth/TheLogin';
export default {
  name: 'App',
  components: {
    TheHeader,
    TheLogin
  },
};
</script>
