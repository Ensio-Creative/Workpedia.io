<template>
  <div>
    <footer class="container">
      <div class="all-rights text-center">
        <p class="rights">
          &copy; {{ date.getFullYear() }} Workpedia. All rights reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'FooterDash',
  data () {
    return {
      date: new Date()
    }
  }
}
</script>

<style scoped>

</style>
