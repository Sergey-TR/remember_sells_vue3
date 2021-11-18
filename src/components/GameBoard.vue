<template>
  <div class="board-wrapper">
    <div class="board">
      <Cells :game-status="gameStatus" v-for="cell in cells" :cell="cell" :key="'cell-' + cell.id"
        @selectCell="selectCell($event)"/>
    </div>

    <p class="difficulty">СЛОЖНОСТЬ: <strong>{{ difficult }}</strong></p>
    <p class="win" v-if="isWin">Поздравляем! Продолжаем играть!</p>
    <p class="fail" v-if="isFail">Вы проиграли. Попробуйте еще раз.</p>

    <button class="btn" @click="start" :disabled="!canStartGame">СТАРТ</button>
  </div>
</template>

<script>
import Cells from "./Cells";
import useGameInit from "./composables/useGameInit";
import useGameStart from "./composables/useGameStart";
import useGameProcess from "./composables/useGameProcess";
import { GAME_STATUS } from "../constants";
import {ref } from "vue";

export default {
  name: "GameBoard",
  components: {
    Cells,
  },
  setup() {

    const number = 25;
    const gameStatus = ref(GAME_STATUS.NONE);

    const {difficult, cells, init} = useGameInit(number);

    const { start, canStartGame } = useGameStart(init, cells, difficult, number, gameStatus);

    const { selectCell, isWin, isFail } = useGameProcess(cells, gameStatus, difficult, start);

    return {
      number,
      difficult,
      cells,
      init,
      start,
      gameStatus,
      canStartGame,
      selectCell,
      isWin,
      isFail
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
  .btn:disabled {
    opacity: .5;
  }

  .win {
    color: #45b983;
  }

  .fail {
    color: #ff000055;
  }
</style>