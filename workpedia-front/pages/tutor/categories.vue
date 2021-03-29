<template>
  <div>
    <CategoryRoutes />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {}
  }
}
</script>

<style scoped>
.search-container{
  margin-top: 20px;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #00000029;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
