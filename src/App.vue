<template>
 <div class="app">
   <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: "App"
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;



}
body {
  background-image: url("assets/background.png");
}
.app {
  padding: 20px;
  align-self: center;


}
</style>