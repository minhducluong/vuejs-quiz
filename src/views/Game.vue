<template>
  <div id="app">
    <Finish />
    <div class="container">
      <Navigation direction="up"/>
      <Quiz />
      <Navigation direction="down"/>
    </div>
    <div class="hint">Bạn có thể dùng các phím mũi tên để chuyển câu hỏi</div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from "@/components/Navigation.vue";
import Quiz from "@/components/Quiz.vue";
import Finish from "@/components/Finish.vue";

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
  background-image: url("../assets/China-Background-c-Sony-Computer-Entertainment.jpg");
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.hint {
	position: absolute;
	bottom: 0;
	right: 0;
	padding: 10px;
	font-style: italic;
	font-size: 1rem;
}

@media (max-width: 1024px) {
	.hint {
		display: none;
	}
}
</style>
