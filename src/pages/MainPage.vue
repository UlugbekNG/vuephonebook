<template>
  <div class="app">
    <section>
      <h1>Телефонная книга</h1>
    </section>
    <add-number
        @create="addNumber"
    />
    <h1>Список контактов</h1>
    <div class="list-nav">
      <input
          class="input"
          type="search"
          v-model="searchQuery"
          placeholder="Поиск"
      >
      <sort-menu
          class="input"
          v-model="selectedSort"
          :options="sortOptions"
      ></sort-menu>
    </div>
    <number-list
        :numbers="sortedAndSearchedNumbers"
        @remove="removeNumber"

    />

  </div>
</template>

<script>
import NumberList from "@/components/NumberList";
import AddNumber from "@/components/AddNumber";
import SortMenu from "@/components/UI/SortMenu";


export  default {
  components: {
    AddNumber, NumberList, SortMenu,
  },
  data () {
    return {
      numbers: [
        {id: 1, owner: 'Otabek', num: 998971451010, group: 'Realsoft'},
        {id: 2, owner: 'Ulugbek', num: 998979051551, group: 'Realsoft'},
        {id: 3, owner: 'Sanjar', num: 998971234567, group: 'Home'},
        {id: 4, owner: 'Drug', num: 998971457897, group: 'Maxalla'},
        {id: 5, owner: 'Anvar', num: 998977894561, group: 'Home'},
        {id: 6, owner: 'Bobir', num: 998977451235, group: 'Maxalla'},
      ],
      numGroups: [
        {name: 'Realsoft', color: '#fffff'}
      ],
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'owner', name: 'По имени'},
        {value: 'group', name: 'По группе'},
      ],

    }
  },
  methods: {
    addNumber (number) {
      this.numbers.push(number);
    },
    removeNumber (number) {
      this.numbers = this.numbers.filter(n => n.id !== number.id)
    },

  },
  computed: {
    sortedNumbers() {
      return [...this.numbers].sort((num1, num2) => num1[this.selectedSort]?.localeCompare(num2[this.selectedSort]))
    },
    sortedAndSearchedNumbers () {
      return this.sortedNumbers.filter(number => number.owner.toLowerCase().includes(this.searchQuery.toLowerCase() ))
    }
  }
}
</script>

<style>

section {
  margin: 0 auto;
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}
.input {
  width: 30%;
  margin: 10px 50px 0;
  border: 2px #efefef solid;
  padding: 10px;
  border-radius: 5px;

}
.list-nav {
  display: flex;
  justify-content: center;
}


</style>







