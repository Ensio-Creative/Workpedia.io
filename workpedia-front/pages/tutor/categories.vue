<template>
  <div>
    <CategoryRoutes />
    <NuxtChild />
  </div>
</template>

<script>
import CategoryRoutes from '~/components/common/CategoryRoutes.vue'
export default {
  name: 'Categories',
  components: { CategoryRoutes },
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
