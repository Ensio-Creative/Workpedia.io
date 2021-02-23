<template>
  <div>
    <TheJobsHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheJobsSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>

</style>
