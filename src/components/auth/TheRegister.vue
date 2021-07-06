<template>
  <the-card>
    <form @submit.prevent="onSubmit">
      <CustomInput v-model="email" label="Mail" type="email" name="email" />
      <CustomInput v-model.number="age" label="Your Age" type="number" name="age" />
      <CustomInput v-model="password" label="Your Password" type="password" name="password" />
      <CustomInput v-model="confirmPassword" label="Confirm Password" type="password" name="confirm-password" />
      <CustomSelectInput v-model="country" label="Country" name="country" :options="countryOptions" />
      <div class="hobbies">
        <h4>Add some Hobbies</h4>
        <button class="custom-btn  custom-btn-primary" @click="addHobbyHandler" type="button">Add Hobby</button>
        <div class="hobby-list">
          <div class="hobby-list__hobby" v-for="hobby in hobbies" :key="hobby.id">
            <CustomInput v-model="hobby.value" type="text" name="hobby" />
            <img @click="deleteHobbyHandler(hobby.id)" class="hobby-list__delete-image icon-btn" src="../../assets/images/delete.svg" alt="Delete icon to remove hobby" />
          </div>
        </div>
      </div>
      <div class="input inline">
        <input type="checkbox" id="terms" v-model="terms">
        <label for="terms">Accept Terms of Use</label>
      </div>
      <button class="btn  btn-outline-info btn-lg" type="submit">Submit</button>
    </form>
  </the-card>
</template>

<script>
import CustomInput from '../shared/CustomInput';
import TheCard from '../shared/TheCard';
import CustomSelectInput from '../shared/CustomSelectInput';
import { randomIdGenerator } from '../../utils';

export default {
  name: 'TheRegister',
  components: {
    CustomInput,
    TheCard,
    CustomSelectInput,
  },

  data() {
    return {
      email: '',
      age: null,
      password: '',
      confirmPassword: '',
      country: 'usa',
      hobbies: [],
      terms: false,
      countryOptions: [
        { id: randomIdGenerator('item'), label: 'USA', value: 'usa' },
        { id: randomIdGenerator('item'), label: 'Jordan', value: 'jordan' },
        { id: randomIdGenerator('item'), label: 'Saudi Arabia', value: 'saudiArabia' },
      ],
    };
  },
  methods: {
    addHobbyHandler() {
      const newHobby = {
        id: randomIdGenerator('hobby'),
        value: '',
      };
      this.hobbies.push(newHobby);
    },
    deleteHobbyHandler(id) {
      this.hobbies = this.hobbies.filter(hobby => hobby.id !== id);
    },
    async onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbies.map(hobby => hobby.value),
        terms: this.terms,
        returnSecureToken: true,
      };
      try {
        await this.$store.dispatch('signUpAction', formData);
        this.resetStateHandler();
        await this.$router.push('/home')
      }
      catch (e) {
        console.error(e);
      }
    },

    resetStateHandler() {
      this.email = '';
      this.age = '';
      this.password = '';
      this.confirmPassword = '';
      this.country = 'usa';
      this.hobbies = [];
      this.terms = false;
    },
  },
};

</script>
