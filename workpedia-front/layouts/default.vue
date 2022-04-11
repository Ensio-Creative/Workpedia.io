<template>
  <div>
    <TheHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <!-- <Responses /> -->
    <FixedNav />
    <div
      v-if="$nuxt.isOffline"
      class="network"
    >
      No internet connection
      <i class="fa fa-stop-circle" />
    </div>
    <Nuxt />
  </div>
</template>

<script>
import FixedNav from '../components/common/FixedNav.vue'
import TheHeader from '../components/Navigation/TheHeader.vue'
import TheSidenav from '../components/Navigation/TheSidenav.vue'
export default {
  name: 'DefaultLayout',
  components: { TheHeader, TheSidenav, FixedNav },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
</style>
