<template>
  <div class="option_wrap">
    <Option
      v-for="(option, index) in options"
      :key="index"
      :option="option"
    />
  </div>
</template>

<script>
import Option from "./Option";
export default {
  props: ['options'],
  components: {
    Option
  }
};
</script>

<style scoped>
.option_wrap {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
}
</style>