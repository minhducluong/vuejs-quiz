<template>
  <div class="wrapper">
    <div class="question">{{ current + 1 }}. {{ question.ask }}</div>
    <div class="option_wrap">
      <Option 
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :index="index"
        :chosen="question.chosen"
      />
    </div>
    <Progress />
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Option from './Option'
import Progress from "./Progress.vue";

export default {
  components: {
    Option,
    Progress
  },

  computed: {
    ...mapState(['current', 'questions']),
    question() {
      return this.questions[this.current]
    },
    options() {
      return this.question.options
    }
  }
};
</script>

<style scoped>
.question {
  height: 170px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 15px;
  text-align: center;
}

.option_wrap {
  height: 100px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
}
</style>