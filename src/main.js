import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  mounted() {
    document.addEventListener('keyup', function(event) {
      if (event.key == 'ArrowDown' || event.key == 'ArrowRight') {
        store.dispatch('next')
      }
    })

    document.addEventListener('keyup', function(event) {
      if (event.key == 'ArrowUp' || event.key == 'ArrowLeft') {
        store.dispatch('prev')
      }
    });	
  },
  render: h => h(App)
}).$mount('#app')
