<template>
  <div class="question">{{ index }}. {{ question }}</div>
</template>

<script>
export default {
  props: ['question', 'index']
};
</script>

<style scoped>
.question {
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}
</style>