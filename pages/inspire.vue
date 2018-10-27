<template>
  <v-layout 
    column="column" 
    justify-center="justify-center" 
    align-center="align-center">
    <v-flex class="text-xs-center">
      <div class="my-5">
        <nuxt-logo/>
        <vuetify-logo/>
      </div>
      <blockquote class="blockquote">
        <div v-html="blockquote"/>
        <footer><small><em v-html="author"/></small></footer>
      </blockquote>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      blockquote:
        "&#8220;First, solve the problem. Then, write the code.&#8221;",
      author: "&mdash;John Johnson"
    };
  }
};
</script>
