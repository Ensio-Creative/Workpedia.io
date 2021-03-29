<template>
  <div class="container mt-3">
    <div class="row justify-content-between">
      <NuxtLink
        class="col-4 top-nav"
        to="/"
      >
        <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
      </NuxtLink>
      <div class="col-6 text-right">
        <UserSign />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopNavInfo',
  data () {
    return {
      search: ''
    }
  }
}
</script>

<style scoped>
.top-nav img{
  width: 50px;
}
.container, .container-sm, .container-md, .container-lg {
    max-width: 1095px;
}
</style>
