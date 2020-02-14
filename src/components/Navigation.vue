<template>
  <i 
    :class="['navigation-icon', 'fas', 'fa-chevron-' + direction]" 
    aria-hidden="true"
    @click="handleNavigate"
  ></i>
</template>

<script>
  export default {
    props: ['direction', 'current'],
    
    methods: {
      handleNavigate() {
        switch(this.direction) {
          case 'up':
            this.current -= 1
            break
          case 'down':
            this.current += 1
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
</style>