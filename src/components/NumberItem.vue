<template>
  <div class="contact shadow-sm">
    <div class="list">
      <p><span>Имя</span> <strong>{{ number.owner }}</strong></p>
      <p><span>ID</span> {{ number.id }}</p>
      <p><span>Группа</span> {{ number.group }}</p>
      <p><span>Номер</span> {{ number.num }} <a href="tel:{{ number.num }}"> <img src="@/assets/phone-icon.png" alt="" width="16" height="16"> </a></p>
    </div>
    <div class="numberBtn">
      <button @click="$emit('remove', number)" class=" btn-close">
      </button>
    </div>
  </div>
</template>

<script>


export default {
  components: {},
  props: {
    number: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.contact {
  padding: 5px;
  border: 2px #003fb300 solid;
  /*background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);*/
  width: 30%;
  background: white;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.contact p {
  margin-bottom: 0;
}
.contact p span {
  font-weight: bold;
}
.numberBtn {
  margin: 5px 0;
  display: flex;
  flex-direction: column;
}
.list p:nth-child(1) {
  font-size: 20px;
}
.list p:nth-child(1) span {
  color: #838383;
}
</style>