<template>
  <the-card>
    <form @submit.prevent="onSubmit">
      <CustomInput v-model="email" label="Mail" type="email" name="email" />
      <CustomInput v-model="password" label="Password" type="password" name="password" />
      <button class="btn  btn-outline-info btn-lg" type="submit">Submit</button>
    </form>
  </the-card>
</template>

<script>
import CustomInput from '../shared/CustomInput';
import TheCard from '../shared/TheCard';

export default {
  name: 'TheLogin',
  components: {
    CustomInput,
    TheCard,
  },

  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password,
      };
      console.log(formData);
    },
  },
};

</script>
