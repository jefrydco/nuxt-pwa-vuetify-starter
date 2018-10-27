<template>
  <v-layout 
    column="column" 
    justify-center="justify-center" 
    align-center="align-center">
    <v-flex 
      xs12="xs12" 
      sm8="sm8" 
      md6="md6">
      <div class="text-xs-center my-5">
        <nuxt-logo/>
        <vuetify-logo/>
      </div>
      <v-card>
        <v-card-title 
          class="headline" 
          v-text="headline"/>
        <v-card-text>
          <p 
            v-for="(item, i) in paragraphs" 
            :key="i" 
            v-html="item"/>
          <div class="text-xs-right"><em><small v-html="'&amp;mdash; John Leider'"/></em></div>
          <hr class="mt-3" >
        </v-card-text>
        <v-card-actions>
          <v-spacer/>
          <v-btn 
            color="primary" 
            flat="flat" 
            nuxt="nuxt" 
            to="/inspire">Continue</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      headline: "Welcome to the Vuetify + Nuxt.js template",
      paragraphs: [
        "Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.",
        'For more information on Vuetify, check out the <a href="https://vuetifyjs.com" target="_blank">documentation</a>.',
        'If you have questions, please join the official <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">discord</a>.',
        'Find a bug? Report it on the github <a href="https://github.com/vuetifyjs/vuetify/issues" target="_blank" title="contribute">issue board</a>.',
        "Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future."
      ]
    };
  }
};
</script>
