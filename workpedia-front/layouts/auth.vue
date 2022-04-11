<template>
  <div class="auth">
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
export default {
  name: 'AuthLayout'
}
</script>

<style scoped>
.auth {
  background: #f1f1ff;
}
h3{
  margin-top: 474px;
  margin-bottom: 100px;
  text-align: left;
  font: normal normal bold 30px/60px Archivo;
  letter-spacing: 0px;
  color: #000;
  opacity: 1;
}
</style>
