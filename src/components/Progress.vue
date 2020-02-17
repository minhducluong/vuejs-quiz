<template>
  <div 
    class="progress"
    :class="progress === 100 && 'done'"
    :style="{ width: progress + '%'}"
  ></div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(['questions']),
    ...mapGetters(["answered"]),
    progress() {
      return this.answered / this.questions.length * 100
    }
  }
};
</script>

<style scoped>
.progress {
  height: 5px;
  margin-top: 70px;
  background-color: rgba(128, 0, 128, 0.5);
  border-radius: 999px;
  transition: all 0.5s;
}
.done {
  background-color: #4CAF50;
}

@media (max-height: 400px) {
	.progress {
		margin-top: 30px;
    height: 4px;
	}
}

@media (max-width: 360px) and (orientation: portrait) {
	.progress {
		margin-top: 20px;
    height: 4px;
	}
}
</style>