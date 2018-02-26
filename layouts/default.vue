<template lang="pug">
  v-app
    v-navigation-drawer(
      :mini-variant.sync="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      fixed
      app
    )
      v-list
        v-list-tile(
          router
          :to="item.to"
          :key="i"
          v-for="(item, i) in items"
          exact
        )
          v-list-tile-action
            v-icon(v-html="item.icon")
          v-list-tile-content
            v-list-tile-title(v-text="item.title")
    v-toolbar(
      fixed
      app
      :clipped-left="clipped"
      color="primary"
      dark
    )
      v-toolbar-side-icon(@click="drawer = !drawer")  
      v-btn(
        icon
        @click.stop="miniVariant = !miniVariant"
      )
        v-icon(v-html="miniVariant ? 'chevron_right' : 'chevron_left'")
      v-btn(
        icon
        @click.stop="clipped = !clipped"
      )
        v-icon(v-html="'web'")
      v-btn(
        icon
        @click.stop="fixed = !fixed"
      )
        v-icon(v-html="'remove'")
      v-toolbar-title(v-text="title")
      v-btn(
        icon
        @click.stop="rightDrawer = !rightDrawer"
      )
    v-content
      v-container
        nuxt
    v-navigation-drawer(
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
    )
      v-list
        v-list-tile(@click.native="right = !right")
          v-list-tile-action
            v-icon(
              light
              v-html="'compare_arrows'"
            )
          v-list-tile-title(v-text="'Switch drawer (click me)'")
    v-footer.pa-3(
      :fixed="fixed"
      app
    )
      v-spacer
      span(v-html="copyright")
</template>


<script>
  export default {
    data () {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          { icon: 'apps', title: 'Welcome', to: '/' },
          { icon: 'bubble_chart', title: 'Inspire', to: '/inspire' }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    },
    computed: {
      copyright () {
        return `Copyright &copy; ${new Date().getFullYear()} jefrydco`
      }
    }
  }
</script>
