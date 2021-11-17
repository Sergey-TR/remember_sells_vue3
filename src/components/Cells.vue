<template>
  <span :class="'cell ' + ((cell.value === 1 && preview) ? 'cell-active' : '')"></span>
</template>

<script>
export default {
  name: "Cells",
  props: {
    cell: {
      type: Object,
      required: true,
    },
    preview: {
      type: Boolean,
      required: false,
      default: false,
    }
  },
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
  .cell-active {
    background: #45b983cc;
    transform: rotateX(180deg);
  }
</style>