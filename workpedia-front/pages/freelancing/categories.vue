<template>
  <div>
    <!-- Categories Nav -->
    <CategoryRoutes />
    <NuxtChild />
  </div>
</template>

<script>
export default {
  name: 'FreelanceCategories',
  data () {
    return {
      displaySidenav: false,
      routes: [
        {
          title: 'Design',
          url: 'design'
        },
        {
          title: 'Handymen',
          url: 'handymen'
        },
        {
          title: 'Animation',
          url: 'animation'
        },
        {
          title: 'Music',
          url: 'music'
        },
        {
          title: 'Programming',
          url: 'programming'
        },
        {
          title: 'Photography',
          url: 'photography'
        },
        {
          title: 'Copywriting',
          url: 'copywriting'
        },
        {
          title: 'Business',
          url: 'business'
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
  color: #2B7DC4;
}
</style>
