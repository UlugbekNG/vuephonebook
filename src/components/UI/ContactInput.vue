<template>
<input type="text" :value="modelValue" @input="updateInput" class="input">
</template>

<script>
export default {
  name: "contact-input",
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput (event) {
      this.$emit ('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
.input {
  width: 50%;
  margin: 10px auto;
  border: 2px #efefef solid;
  padding: 10px;
  border-radius: 5px;

}
</style>