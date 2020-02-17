<template>
  <div 
    class="option"
    :class="chosen === index ? 'chosen' : ''"
    @click="select(index)"
  >
    {{ option }}
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['option', 'index', 'chosen'],

  methods: {
    ...mapActions(['select'])
  }
};
</script>

<style scoped>
.option {
  border: 1px solid black;
  border-radius: 7px;
  flex: 1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  padding: 0 10px;
  cursor: pointer;
}

.chosen {
  background-color: rgba(128, 0, 128, 0.3);
}

@media (max-width: 576px) {
	.option {
		height: 50px;
		font-size: 16px;
	}
}

@media (max-width: 360px) and (orientation: portrait) {
	.option {
		min-width: 35%;
		margin-bottom: 15px;
	}
}
</style>