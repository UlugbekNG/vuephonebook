<template>
  <section>
    <div class="addnumber">
      <contact-input
          v-model="number.owner"
          type="text"
          placeholder="Название"
          class="input"
      />
      <contact-input
          v-model="number.group"
          type="text"
          placeholder="Группа"
          class="input"
      />
      <input-number
          v-model="number.num"
          type="number"
          placeholder="Номер"
          class="input"
      />
      <button @click="addNumber">Добавить</button>
    </div>
  </section>
</template>

<script>
import ContactInput from "@/components/UI/ContactInput";
import InputNumber from "@/components/UI/InputNumber";
export default {
  components: {InputNumber, ContactInput},
  data () {
    return {
      number: {
        id: '',
        owner: '',
        num: '',
        group: '',
      }
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
.addnumber {
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
.addnumber button {
  width: 30%;
  margin: 10px auto;
  border: 2px #efefef solid;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

</style>