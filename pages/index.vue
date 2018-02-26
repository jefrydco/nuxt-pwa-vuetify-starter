<template lang="pug">
  v-layout(
    column
    justify-center
    align-center
  )
    v-flex(
      xs12
      sm8
      md6
    )
      .text-xs-center.my-5
        nuxt-logo
        vuetify-logo
      v-card
        v-card-title.headline(v-text="headline")
        v-card-text
          p(
            :key="i"
            v-for="(item, i) in paragraphs"
            v-html="item"
          )
          .text-xs-right
            em
              small(v-html="'&mdash; John Leider'")
          hr.mt-3
        v-card-actions
          v-spacer
          v-btn(
            color="primary"
            flat
            nuxt
            to="/inspire"
          ) Continue
</template>

<script>
export default {
  data () {
    return {
      headline: 'Welcome to the Vuetify + Nuxt.js template',
      paragraphs: [
        'Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.',
        'For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.',
        'If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.',
        'Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.',
        'Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.'
      ]
    }
  }
}
</script>
