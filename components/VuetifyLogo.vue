<template lang="pug">
  img.vuetify-logo(
    src="/icon.png"
    alt="Vuetify.js"
    width="200"
  )
</template>

<script>
export default {
  name: 'vuetify-logo'
}
</script>


<style lang="sass">
.vuetify-logo
  width: 180px
  transform: rotateY(560deg)
  animation: turn 3.5s ease-out forwards 1s

@keyframes turn
  100%
    transform: rotateY(0deg)
</style>