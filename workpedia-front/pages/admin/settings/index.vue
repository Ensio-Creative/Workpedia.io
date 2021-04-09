<template>
  <div class="container">
    <TopNavInfo
      dash-title="Settings"
    />
    <h2>Settings</h2>
    <FooterDash
      class="fixed-bottom"
    />
  </div>
</template>

<script>
export default {
  name: 'Settings',
  layout: 'admin'
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
