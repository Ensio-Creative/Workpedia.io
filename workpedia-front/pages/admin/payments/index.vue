<template>
  <div class="container">
    <TopNavInfo
      dash-title="Payments"
    />
    <h2>Payments</h2>
    <FooterDash
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'Users',
  layout: 'admin'
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
