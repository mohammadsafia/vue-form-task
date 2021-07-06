<template>
  <the-card>
    <h3 class="text-center">Welcome Back</h3>
  </the-card>
</template>

<script>
import TheCard from './shared/TheCard';

export default {
  name: 'TheHome',
  components: { TheCard },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        await this.$store.dispatch('getUserDetailsAction', this.$store.state.accessToken);
      }
      catch (e) {
        console.error(e);
      }
    },
  },
};
</script>
