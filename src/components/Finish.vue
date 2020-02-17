<template>
  <div 
    class="finish"
    :class="answered === total && 'allAnswered pulse'"
    @click="handleFinish"
  >
    <i style class="finish-icon fas fa-paper-plane" aria-hidden="true"></i>
    Finish
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["questions"]),
    ...mapGetters(["answered", "point"]),
    total() {
      return this.questions.length
    }
  },

  methods: {
    handleFinish() {
      const answered = this.answered;
      const point = this.point;
      const total = this.total;
      const questions = this.questions
      const falseAnswers = []

      questions.forEach((question, index) => {
        if (question.chosen !== question.answerIndex) {
          falseAnswers.push(index + 1)
        }
      });

      if (answered < total) {
        if (confirm("Bạn chưa trả lời hết tất cả các câu.\nBạn có chắc chắn muốn tính điểm?")) {
          alert(`Bạn trả lời đúng ${point}/${total} câu.\nCâu chưa đúng là ${falseAnswers.join(', ')}.\nTrả lời đúng hết sẽ có phần thưởng.`);
        }
      } else {
        if (point === total) {
          this.$router.push('/congrat')
        } else {
          alert(`Bạn trả lời đúng ${point}/${total} câu.\nCâu chưa đúng là ${falseAnswers.join(', ')}.\nTrả lời đúng hết sẽ có phần thưởng.`);
        }
      }
    }
  }
};
</script>

<style scoped>
.finish {
  color: purple;
  position: absolute;
  top: 10%;
  right: 10%;
  padding: 10px 20px;
  border: 1px solid purple;
  cursor: pointer;
  border-radius: 5px;
}

.finish:hover {
  background-color: purple;
  color: white;
}

.finish-icon {
  font-size: 20px;
  padding-right: 10px;
}

.allAnswered {
  color: #4CAF50;
  border: 1px solid #4CAF50;
}

.allAnswered:hover {
  background-color: #4CAF50;
  color: white;
}

@keyframes pulse {
  from {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }

  50% {
    -webkit-transform: scale3d(1.2, 1.2, 1.2);
    transform: scale3d(1.2, 1.2, 1.2);
  }

  to {
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}

.pulse {
  -webkit-animation-name: pulse;
  animation-name: pulse;
  animation-duration: .5s;
}

@media (max-width: 576px) {
	.finish {
		font-size: 24px;
	}
}

@media (max-width: 360px) and (orientation: portrait) {
	.finish {
		position: static;
	}
}

@media (max-height: 400px) {
	.finish {
		top: 2%;
		right: 2%;
	}
}
</style>