<template>
  <header class="main-header">
    <div class="logo">
      <router-link to="/">Vue - Complete Guide</router-link>
    </div>
    <nav class="main-header__nav">
      <ul class="main-header__nav__items">
        <li>
          <router-link to="/register">Sign Up</router-link>
        </li>
        <li>
          <router-link to="/login">Sign In</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
};
</script>
