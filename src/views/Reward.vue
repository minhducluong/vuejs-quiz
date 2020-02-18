<template>
  <div>
    <iframe
      class="youtube"
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/pXYHCzswwbg?autoplay=1"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>

    <div v-if="show" class="congrat">
      CHÚC MỪNG BẠN
      <br />ĐÃ TRẢ LỜI ĐÚNG HẾT CÁC CÂU HỎI
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true
    }
  },

  mounted() {
    setTimeout(() => {
      this.show = false
    }, 8000)
  }
}
</script>

<style scoped>
.youtube {
  height: 100vh;
}

.congrat {
  font-size: 35px;
  position: absolute;
  top: 45%;
  left: 20%;
  right: 20%;
  padding: 10px;
  text-align: center;
  color: white;
  background-color: rgb(0, 0, 0, 0.5);
  animation: 8s fadeInUp;
  opacity: 0;
}

@media (max-width: 360px) {
  .congrat {
    font-size: 20px;
  }
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  80% {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  100% {
    opacity: 0;
  }
}
</style>