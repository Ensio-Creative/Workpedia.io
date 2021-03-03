<template>
  <div>
    <TheFreeHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheFreeSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <!-- Categories Nav -->
    <nav class="navbar navbar-expand-lg categories-nav">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <p>Categories</p>
        </button>
        <div
          id="navbarNavAltMarkup"
          class="collapse navbar-collapse"
        >
          <div class="navbar-nav">
            <NuxtLink
              class="nav-link active"
              to="/freelancing/categories"
            >
              All Categories
            </NuxtLink>
            <NuxtLink
              v-for="route in routes"
              :key="route.url"
              class="nav-link active"
              :to="`/freelancing/categories/${route.url}`"
            >
              {{ route.title }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
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
        },
        {
          title: 'Lifestyle',
          url: 'lifestyle'
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
