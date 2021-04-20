<template>
  <div class="container">
    <TopNavInfo
      dash-title="Gigs"
    />
    <FreelanceNavAdmin
      class="mt-5"
    />
    <h2 class="mt-5">
      Every freelancers request
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Gigs',
  layout: 'admin'
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
