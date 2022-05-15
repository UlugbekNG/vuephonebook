<template>
  <section>
    <div class="addNumber">
        <div class="mb-3">
          <label for="owner" class="form-label">Имя контакта</label>
          <input type="text" v-model="number.owner" class="form-control" id="owner" aria-describedby="emailHelp" required>
          <div id="emailHelp" class="form-text">Данное имя нельзя будет редактировать :)</div>
        </div>
        <div class="mb-3">
          <label for="group" class="form-label">Группа</label>
          <input type="text" v-model="number.group" class="form-control" id="exampleInputPassword1" required>
        </div>
        <div class="mb-3">
          <label for="number" class="form-label">Номер</label>
          <input type="number" v-model="number.num" class="form-control" id="number" required>
        </div>
        <button type="submit" class="btn btn-primary" @click="addNumber" value="submit">Сохранить</button>
    </div>

  </section>
</template>

<script>


export default {
  components: {},
  data () {
    return {
      errors: [],
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
    },

  }
}
</script>

<style scoped>
.addNumber {
  display: flex;
  flex-direction: column;

}

.input {
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