<template>
  <button class="btn-1">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'btn-1',
}
</script>

<style>
.btn-1{
  margin-right: 5px;
  border: none;
  padding: 5px;
  cursor: pointer;
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  margin-bottom: 5px;
}
</style>