<template>
  <div class="board-wrapper">
    <div class="board">
      <Cells :preview="preview" v-for="cell in cells" :cell="cell" :key="'cell-' + cell.id"/>
    </div>

    <p class="difficulty">СЛОЖНОСТЬ: <strong>{{ difficult }}</strong></p>
    <button class="btn" @click="start">СТАРТ</button>
  </div>
</template>

<script>
import Cells from "./Cells";
import useGameInit from "./composables/useGameInit";
import useGameStart from "./composables/useGameStart";

export default {
  name: "GameBoard",
  components: {
    Cells,
  },
  setup() {

    const number = 25;

    const {difficult, cells, init} = useGameInit(number);

    const { start, preview } = useGameStart(init, cells, difficult, number)

    return {
      number,
      difficult,
      cells,
      init,
      start,
      preview
    }
  }
}
</script>

<style scoped>
  .board-wrapper {
    margin-bottom: 100px;
  }
  .board {
    margin: 0 auto;
    width: 300px;
    background: #eee;
  }
  .btn {
    background: #45b983cc;
    color: white;
    font-weight: bold;
    border: none;
    outline: none;
    border-radius: 2px;
    padding: 10px 50px;
    margin: 10px 0;
    cursor: pointer;
  }
  .btn:hover {
    background: #45b983;
  }
</style>