<template>
  <div class="form-group">
    <label :aria-invalid="invalid" :for="name">{{ label }}</label>
    <input :aria-invalid="invalid" :type="type" class="form-control" :id="name" :placeholder="placeholder" autocomplete="off" :value="value" v-on:change="onChange">
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    label: {
      type: String,
    },
    value: {
      type: String,
    },
    invalid: {
      type:Boolean,
      default: false
    }
  },
  methods: {
    onChange(event) {
      this.$emit('onChangeHandler', event.target.value);
    },
  },
};
</script>

<style scoped>

</style>
