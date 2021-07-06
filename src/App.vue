<template>
  <div id="app">
    <the-header />
    <router-view></router-view>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  name: 'App',
  components: {
    TheHeader,
  },
};
</script>
