<template>
  <div>
    <TheHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <FixedNav />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
</style>
