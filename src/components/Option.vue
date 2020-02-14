<template>
  <div class="option">{{ option }}</div>
</template>

<script>
export default {
  props: ['option']
};
</script>

<style scoped>
.option {
  border: 1px solid black;
  border-radius: 7px;
  width: 20%;
  float: left;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 0 10px;
  cursor: pointer;
}
</style>