<template>
  <div>
    <TheTutorHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheTutorSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <FixedNav />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'TutorLayout',
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>

</style>
