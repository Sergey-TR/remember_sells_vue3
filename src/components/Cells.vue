<template>
  <span :class="getCellsClasses" @click="select(cell.id)"></span>
</template>

<script>
import {FIELD, GAME_STATUS} from "../constants";
import { computed } from "vue";

export default {
  name: "Cells",
  props: {
    cell: {
      type: Object,
      required: true,
    },
    gameStatus: {
      type: Number,
      required: false,
      default: GAME_STATUS.NONE,
    }
  },
  setup(props) {
    // computed
    const getCellsClasses = computed(() => {
      let classes = 'cell ';

      if (props.cell.value === FIELD.FILLED && props.gameStatus === GAME_STATUS.PREVIEW
          || props.cell.clicked && props.cell.value === FIELD.FILLED) {
        classes += 'active'
      }

      if (props.cell.clicked && props.cell.value === FIELD.EMPTY) {
        classes += ' error';
      }

      return classes;
    });
    return {
      getCellsClasses
    }
  },
  methods: {
    select(id) {
      if (this.gameStatus === GAME_STATUS.STARTED) {
        this.$emit('selectCell', id);
      }
    }
  }
}
</script>

<style scoped>
  .cell {
    position: relative;
    width: 50px;
    height: 50px;
    background: #ccc;
    display: inline-block;
    margin: 5px;
    cursor: pointer;
    transition: .5s;
    transform-style: preserve-3d;
  }
  .cell.active {
    background: #45b983cc;
    transform: rotateX(180deg);
  }

  .cell.error {
    background: #ff000055;
    transform: rotateX(180deg);
  }
</style>