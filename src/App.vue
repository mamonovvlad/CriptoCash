<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
import HomeLayout from '@/layouts/HomeLayout'
import EmptyLayout from '@/layouts/EmptyLayout'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || 'empty') + '-layout'
    }
  },
  components: {
    HomeLayout,
    EmptyLayout
  }
}
</script>

<style lang="sass">
@import "assets/app.css"
@import "assets/fontello.css"
</style>
