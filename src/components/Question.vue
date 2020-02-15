<template>
  <div class="question">{{ index }}. {{ question }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['question', 'index'],

  computed: {
    ...mapState(['question'])
  }
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