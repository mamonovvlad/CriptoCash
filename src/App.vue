<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>

import EmptyLayout from '@/layouts/EmptyLayout'
import HomeLayout from '@/layouts/HomeLayout'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    EmptyLayout,
    HomeLayout
  }
}
</script>

<style lang="sass">
@import "assets/fontello.css"
@import "assets/app.css"
</style>
