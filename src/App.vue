<template>
  <div id="app">
    <div class="container">
      <Navigation direction="up" :current="current"/>
      <div class="wrapper">
        <Question :question="questions[current].ask" :index="current + 1" />
        <Options :options="questions[current].options" />
      </div>
      <Navigation direction="down" :current="current"/>
    </div>
  </div>
</template>

<script>
import Question from "./components/Question.vue";
import Options from "./components/Options.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  data() {
    return {
      current: 0,
      questions: [
        {
          ask: 'Hà Nội có bao nhiêu con voi?',
          options: [0, 1, 2, 3]
        },
        {
          ask: 'Voi Hà Nội sống ở đâu (nếu có)?',
          options: [
            'Ba Vì',
            'HN không có voi',
            'Vườn Bách Thảo',
            'Thủ Lệ'
          ]
        }
      ]
    }
  },
  components: {
    Question,
    Options,
    Navigation
  }
};
</script>

<style>
body {
  margin: 0;
}

#app {
  overflow-x: hidden;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  font-size: 30px;
}

#app::before {
  background-image: url("./assets/China-Background-c-Sony-Computer-Entertainment.jpg");
  background-size: cover;
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.2;
  z-index: -1;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  width: 100%;
  height: 400px;
  margin: 20px 0;
}
</style>
