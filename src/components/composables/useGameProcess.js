import {DEFAULT_DIFFICULT, FIELD, GAME_SPEED, GAME_STATUS} from "../../constants";
import {computed, nextTick} from "vue";

export default function useGameProcess (cells, gameStatus, difficult, start) {
    const selectCell = (id) => {
        const index = cells.value.findIndex((cell) => {
            return cell.id === id;
        });

        if (index > -1 && !cells.value[index].clicked) {
            cells.value[index].clicked = true;

            checkGame()
        }
    }

    const checkGame = () => {
      const errorIndex = cells.value.findIndex(cell => {
        return cell.clicked && cell.value === FIELD.EMPTY;
      });

      if (errorIndex > -1) {
          setGameOver();
          return;
      }
      const notFoundCellIndex = cells.value.findIndex(cell => {
          return !cell.clicked && cell.value === FIELD.FILLED;
      });

      if (notFoundCellIndex === -1) {
          setWin();
      }
    }

    const setGameOver = () => {
      gameStatus.value = GAME_STATUS.FAIL;
      difficult.value = DEFAULT_DIFFICULT;
    }

    const setWin = () => {
        gameStatus.value = GAME_STATUS.WIN;
            setTimeout(async () => {
                difficult.value += 1;
                await nextTick();
                start();
        }, GAME_SPEED);
    }

    const isWin = computed(() => {
      return gameStatus.value === GAME_STATUS.WIN;
    });
    const isFail = computed(() => {
        return gameStatus.value === GAME_STATUS.FAIL;
    });

    return {
        selectCell,
        isWin,
        isFail
    }
}