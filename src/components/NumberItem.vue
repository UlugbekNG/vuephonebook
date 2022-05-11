<template>
  <div class="contact">
    <div>
      <p><span>ID</span> {{ number.id }}</p>
      <p><span>Имя</span> {{ number.owner }}</p>
      <p><span>Группа</span> {{ number.group }}</p>
      <p><span>Номер</span> {{ number.num }} <a href="tel:{{ number.num }}"> <img src="@/assets/phone-icon.png" alt="" width="16" height="16"> </a></p>
    </div>
    <div class="numberBtn">
      <contact-btn @click="$emit('remove', number)" class="btn-1">Удалить</contact-btn>
      <contact-btn class="btn-1">Редактировать</contact-btn>
    </div>
  </div>
</template>

<script>
import ContactBtn from "@/components/UI/ContactBtn";

export default {
  components: {ContactBtn},
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
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  width: 30%;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}

.contact p span {
  font-weight: bold;
}
.numberBtn {
  margin: 5px 0;
  display: flex;
  flex-direction: column;
}

</style>