<template>
  <div>
    <TheJobsHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheJobsSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <!-- Categories Nav -->
    <CategoryRoutes />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'Categories',
  data () {
    return {
      displaySidenav: false,
      routes: [
        {
          title: 'Design',
          url: 'design'
        },
        {
          title: 'Web Dev',
          url: 'web-dev'
        },
        {
          title: 'Writing',
          url: 'writing'
        },
        {
          title: 'Marketing',
          url: 'marketing'
        },
        {
          title: 'Accounting',
          url: 'accounting'
        },
        {
          title: 'Business',
          url: 'business'
        },
        {
          title: 'Customer Service',
          url: 'customer-service'
        }
      ]
    }
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav a:hover,
.categories-nav a:active,
.categories-nav a.nuxt-link-active {
  color: #0DB47B;
}
</style>
