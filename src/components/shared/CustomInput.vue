<template>
  <div class="input-form-group">
    <label :for="name">{{ label }}</label>
    <input
        autocomplete="off"
        :type="type"
        v-on="$listeners"
        :value="value"
        @input="$emit('update', $event.target.value)"
        :placeholder="placeholder"
        class="form-control"
    >
  </div>
</template>

<script>
import { inputTypes, isCorrectType } from '../../utils';

export default {
  name: 'BaseInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        const isValid = isCorrectType(inputTypes)(value);
        if (!isValid) {
          console.warn(`allowed types are ${ inputTypes }`);
        }
        return isValid;
      },
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  model: {
    prop: 'value',
    event: 'update',
  },
};
</script>

<style scoped>

</style>
