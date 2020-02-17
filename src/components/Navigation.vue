<template>
  <i 
    :class="['navigation-icon', 'fas', 'fa-chevron-' + direction]" 
    aria-hidden="true"
    @click="handleNavigate"
  ></i>
</template>

<script>
  import { mapState } from 'vuex'
  import { mapActions } from 'vuex'

  export default {
    props: ['direction'],

    computed: {
      ...mapState(['current'])
    },
    
    methods: {
      ...mapActions(['prev', 'next']),
      handleNavigate() {
        switch(this.direction) {
          case 'up':
            this.prev()
            break
          case 'down':
            this.next()
            break
        }
      }
    }
  }
</script>

<style scoped>
.navigation-icon {
  cursor: pointer;
  padding: 30px;
}

@media (max-height: 400px), (max-width: 360px) and (orientation: portrait) {
	.navigation-icon {
		padding: 15px;
	}
}
</style>