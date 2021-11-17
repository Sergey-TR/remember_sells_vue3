<template>
  <div class="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png">
    <h1 class="h1">Remember cells, made on Vue 3</h1>
    <p class="p">Запомни и открой зеленые ячейки</p>

    <GameBoard />
  </div>
</template>

<script>

import GameBoard from "./components/GameBoard";
export default {
  name: 'App',
  components: {
    GameBoard,
  }
}
</script>

<style>
  .app {
    margin-top: 40px;
    text-align: center;
  }
  .logo {
    width: 50px;
  }
</style>
