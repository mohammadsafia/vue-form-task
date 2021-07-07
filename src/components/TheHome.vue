<template>
  <the-card>
    <header class="mb-2">
      <h3> If you have account you can login, or create new one</h3>
    </header>
    <div class="d-flex align-items-center justify-content-center">
      <button @click="$router.push('/login')" class="custom-btn custom-btn-primary mr-2">
        Sign In
      </button>
      <button @click="$router.push('/register')" class="custom-btn custom-btn-primary">
        SignUp
      </button>
    </div>
  </the-card>
</template>

<script>
import TheCard from './shared/TheCard';

export default {
  name: 'TheHome',
  components: { TheCard },
};
</script>
