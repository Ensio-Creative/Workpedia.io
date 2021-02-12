<template>
  <div class="container mt-3">
    <div class="row justify-content-between">
      <div class="col-4 top-nav">
        <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
      </div>
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
</style>
