<template>
  <div>
    <h2>{{ errors.message }}</h2>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'ErrorsComponent',
  computed: {
    ...mapState(['errors'])
  }
}
</script>

<style scoped>

</style>
