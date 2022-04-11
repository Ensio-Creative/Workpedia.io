<template>
  <div class="get-tutor">
    <!-- <Responses /> -->
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
export default {}
</script>

<style scoped>
.get-tutor {
  background-color: #f1f1ff;
}
</style>
