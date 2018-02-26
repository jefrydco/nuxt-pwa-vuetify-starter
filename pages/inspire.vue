<template lang="pug">
  v-layout(
    column
    justify-center
    align-center
  )
    v-flex.text-xs-center
      .my-5
        nuxt-logo
        vuetify-logo
      blockquote.blockquote
        div(v-html="blockquote")
        footer
          small
            em(v-html="author")
</template>

<script>
export default {
  data () {
    return {
      blockquote: '&#8220;First, solve the problem. Then, write the code.&#8221;',
      author: '&mdash;John Johnson'
    }
  }
}
</script>
