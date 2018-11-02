<template>
  <div class="vue-to-nuxt-logo">
    <div 
      v-for="i in 4" 
      :key="i" 
      :class="`triangle-${i}`" 
      class="triangle"/>
  </div>
</template>

<script>
export default {};
</script>


<style lang="sass">
.vue-to-nuxt-logo
  display: inline-block
  animation: turn 2s linear forwards 1s
  transform: rotateX(180deg)
  position: relative
  overflow: hidden
  height: 180px
  width: 245px

.triangle
  position: absolute
  top: 0
  left: 0
  width: 0
  height: 0

  &-1
    border-left: 105px solid transparent
    border-right: 105px solid transparent
    border-bottom: 180px solid #41B883

  &-2
    top: 30px
    left: 35px
    animation: goright 0.5s linear forwards 3.5s
    border-left: 87.5px solid transparent
    border-right: 87.5px solid transparent
    border-bottom: 150px solid #3B8070

  &-3
    top: 60px
    left: 35px
    animation: goright 0.5s linear forwards 3.5s
    border-left: 70px solid transparent
    border-right: 70px solid transparent
    border-bottom: 120px solid #35495E
  
  &-4
    top: 120px
    left: 70px
    animation: godown 0.5s linear forwards 3s
    border-left: 35px solid transparent
    border-right: 35px solid transparent
    border-bottom: 60px solid #fff

@keyframes turn
  100%
    transform: rotateX(0deg)

@keyframes godown
  100%
    top: 180px

@keyframes goright
  100%
    left: 70px
</style>
