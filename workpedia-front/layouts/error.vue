<template>
  <div class="container">
    <h1>
      Page not found
    </h1>
    <h1>
      An error occurred
    </h1>
    <div
      v-if="$nuxt.isOffline"
      class="network"
    >
      No internet connection
      <i class="fa fa-stop-circle" />
    </div>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
