<template>
  <section class="col-3 ">
    <div class="sidebar col-3 shadow">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light w-100">
          <span class="fs-4">Добавить номер</span>
          <hr>
          <add-number
              @create="addNumber"
          />
          <hr>
        </div>
      <div class="info">
        <h2> <img src="@/assets/vuelogo.png" alt="" width="32" height="32"> Телефонная книга</h2>
        <p>
          <a href="https://github.com/UlugbekNG/vuephonebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          GitHub
        </a>
        </p>
      </div>
    </div>
  </section>

  <div class="content col-md-9">

    <h1>Список контактов</h1>
    <div class="list-nav">
      <input
          class="input"
          type="search"
          v-model="searchQuery"
          placeholder="Поиск по имени"
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
      numbers: [],
      selectedSort: '',
      searchQuery: '',
      sortOptions: [
        {value: 'owner', name: 'По имени'},
        {value: 'group', name: 'По группе'},
      ],

    }
  },
  mounted() {
    if (localStorage.numbers) {
      this.numbers = JSON.parse(localStorage.numbers)
    }
  },
  watch : {
    numbers: {
      handler(newNumber) {
        localStorage.numbers = JSON.stringify(newNumber);
      },
      deep: true
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
  /*margin: 0 auto;*/
}

h1 {
  text-align: center;
  margin-bottom: 10px;
}
.input {
  border: 2px #efefef solid;
  padding: 10px;
  border-radius: 5px;

}
.list-nav {
  display: flex;
  justify-content: center;
}
.sidebar {
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}
.content {
  margin-left: 28%;
}

.info {
  padding: 10px;
}
.info a {
  font-family: monospace;
  font-size: larger;
  text-decoration: none;
}
</style>







