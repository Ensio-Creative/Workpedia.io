<template>
  <div class="mt-3">
    <div class="row justify-content-between">
      <div class="col-6 col-md-11">
        <h2>{{ dashTitle }}</h2>
      </div>
      <div class="col-6 col-md-1 text-right">
        <UserSign />
      </div>
    </div>
  </div>
</template>

<script>
import UserSign from '@/components/common/UserSign.vue'
export default {
  name: 'TopNavInfo',
  components: { UserSign },
  props: {
    dashTitle: {
      type: String,
      requried: true,
      default: 'Title'
    }
  },
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
  max-width: 1050px;
}
</style>
