<template>
  <div class="input-form-group">
    <label :for="name">{{ label }}</label>
    <select
        autocomplete="off"
        v-on="$listeners"
        :value="value"
        @input="$emit('update', $event.target.value)"
        class="form-control"
    >
      <option v-for="option in options" :key="option.id" :value="option.value">{{ option.label }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CustomSelectInput',
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    placeholder: {
      type: String,
    },
    name: {
      type: String,
    },
    options: {
      type: Array
    }
  },
  model: {
    prop: 'value',
    event: 'update',
  },
};
</script>
