<template>
  <v-app>
    <v-navigation-drawer 
      :mini-variant.sync="miniVariant" 
      :clipped="clipped" 
      v-model="drawer" 
      fixed="fixed" 
      app="app">
      <v-list>
        <v-list-tile 
          v-for="(item, i) in items" 
          :to="item.to" 
          :key="i" 
          router="router" 
          exact="exact">
          <v-list-tile-action>
            <v-icon v-html="item.icon"/>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"/>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar 
      :clipped-left="clipped" 
      fixed="fixed" 
      app="app" 
      color="primary" 
      dark="dark">
      <v-toolbar-side-icon @click="drawer = !drawer"/>
      <v-btn 
        icon="icon" 
        @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>
      </v-btn>
      <v-btn 
        icon="icon" 
        @click.stop="clipped = !clipped">
        <v-icon v-html="'web'"/>
      </v-btn>
      <v-btn 
        icon="icon" 
        @click.stop="fixed = !fixed">
        <v-icon v-html="'remove'"/>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-btn 
        icon="icon" 
        @click.stop="rightDrawer = !rightDrawer"/>
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt/>
      </v-container>
    </v-content>
    <v-navigation-drawer 
      :right="right" 
      v-model="rightDrawer" 
      temporary="temporary" 
      fixed="fixed">
      <v-list>
        <v-list-tile @click.native="right = !right">
          <v-list-tile-action>
            <v-icon 
              light="light" 
              v-html="'compare_arrows'"/>
          </v-list-tile-action>
          <v-list-tile-title v-text="'Switch drawer (click me)'"/>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </v-app>
</template>


<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: "apps", title: "Welcome", to: "/" },
        { icon: "bubble_chart", title: "Inspire", to: "/inspire" }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
