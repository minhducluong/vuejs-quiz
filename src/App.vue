<template>
  <div id="app">
    <Finish />
    <div class="container">
      <Navigation direction="up"/>
      <Quiz />
      <Navigation direction="down"/>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation.vue";
import Quiz from "./components/Quiz.vue";
import Finish from "./components/Finish.vue";

export default {
  name: "App",

  components: {
    Navigation,
    Quiz,
    Finish
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
  width: 90%;
  height: 400px;
  margin: 20px 0;
}
</style>
