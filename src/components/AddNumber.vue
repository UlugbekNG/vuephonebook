<template>
  <section>
    <div class="addNumber">
      <contact-input
          v-model="number.owner"
          type="text"
          aria-required="true"
          placeholder="Название"
          class="input"
      />
      <contact-input
          v-model="number.group"
          type="text"
          placeholder="Группа"
          aria-required="true"
          class="input"
      />
      <contact-input
          v-model="number.num"
          type="number"
          aria-required="true"
          placeholder="Номер"
          class="input"
      />
      <button @click="addNumber">Добавить</button>
    </div>
  </section>
</template>

<script>
import ContactInput from "@/components/UI/ContactInput";

export default {
  components: { ContactInput},
  data () {
    return {
      number: {
        id: '',
        owner: '',
        num: '',
        group: '',
      },
    }
  },
  methods: {
    addNumber () {
      this.number.id = Date.now();
      this.$emit('create', this.number)
      this.number = {
        owner: '',
        num: '',
        group: '',
      }
    }
  }
}
</script>

<style scoped>
.addNumber {
  display: flex;
  flex-direction: column;

}

.input {
  width: 50%;
  margin: 10px auto;
  border: 2px #efefef solid;
  padding: 10px;
  border-radius: 5px;

}
.addNumber button {
  width: 30%;
  margin: 10px auto;
  border: 2px #efefef solid;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>