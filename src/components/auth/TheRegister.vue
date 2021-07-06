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
        <button class="custom-btn  custom-btn-primary" @click="onAddHobby" type="button">Add Hobby</button>
        <div class="hobby-list">
          <div class="hobby-list__hobby" v-for="hobbyInput in hobbyInputs" :key="hobbyInput.id">
            <CustomInput v-model="hobbyInput.value" type="text" name="hobby" />
            <img @click="onDeleteHobby(hobbyInput.id)" class="hobby-list__delete-image icon-btn" src="../../assets/images/delete.svg" alt="Delete icon to remove hobby" />
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
      hobbyInputs: [],
      terms: false,
      countryOptions: [
        { id: randomIdGenerator('item'), label: 'USA', value: 'usa' },
        { id: randomIdGenerator('item'), label: 'Jordan', value: 'jordan' },
        { id: randomIdGenerator('item'), label: 'Saudi Arabia', value: 'saudiArabia' },
      ],
    };
  },
  methods: {
    onAddHobby() {
      const newHobby = {
        id: randomIdGenerator('hobby'),
        value: '',
      };
      this.hobbyInputs.push(newHobby);
    },
    onDeleteHobby(id) {
      this.hobbyInputs = this.hobbyInputs.filter(hobby => hobby.id !== id);
    },
    onSubmit() {
      const formData = {
        email: this.email,
        age: this.age,
        password: this.password,
        confirmPassword: this.confirmPassword,
        country: this.country,
        hobbies: this.hobbyInputs.map(hobby => hobby.value),
        terms: this.terms,
      };
      console.log(formData);
    },
  },
};

</script>
