<template>
  <section>
    <div v-if="numbers.length > 0 " class="contactlist" >
      <transition-group name="number-list">
        <number-item
            v-for="number in numbers"
            :number="number"
            :key="number.id"
            @remove="$emit('remove', number)"
        />
      </transition-group>

    </div>
    <h1 v-else><span class="badge text-danger"> Список контактов пуст</span></h1>
  </section>
</template>

<script>
import NumberItem from "@/components/NumberItem";
export default {
  data () {
    return {
    }
  },
  components: {NumberItem,},
  props: {
    numbers: {
      type: Array,
    }
  },

}
</script>

<style scoped>
.contactlist {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: start;

}
.number-list-item {
  display: inline-block;
  margin-right: 10px;
}
.number-list-enter-active,
.number-list-leave-active {
  transition: all 0.5s ease;
}
.number-list-enter-from,
.number-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.badge {
  backdrop-filter: blur(4px);
}
</style>