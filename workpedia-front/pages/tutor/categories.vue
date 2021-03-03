<template>
  <div>
    <TheTutorHeader
      @sidenavToggle="displaySidenav = !displaySidenav"
    />
    <TheTutorSidenav
      :show="displaySidenav"
      @close="displaySidenav = false"
    />
    <!-- Categories Nav -->
    <nav class="navbar navbar-expand-lg categories-nav">
      <div class="container text-center">
        <button
          class="navbar-toggler categories-btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- <i class="fas fa-bars" /> -->
          <p>Categories</p>
        </button>
        <div
          id="navbarNav"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav">
            <NuxtLink
              class="nav-link active"
              to="/tutor/categories"
            >
              All Categories
            </NuxtLink>
            <NuxtLink
              v-for="(route) in routes"
              :key="route.url"
              class="nav-link mr-3"
              :to="`/tutor/categories/${route.url}`"
            >
              {{ route.title }}
            </NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
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
          title: 'Mathematics',
          url: 'mathematics'
        },
        {
          title: 'English',
          url: 'english'
        },
        {
          title: 'Sciences',
          url: 'sciences'
        },
        {
          title: 'Arts',
          url: 'arts'
        },
        {
          title: 'Computer Sciences',
          url: 'computer-sciences'
        },
        {
          title: 'Business',
          url: 'businesss'
        },
        {
          title: 'Religion',
          url: 'religion'
        },
        {
          title: 'Hobbies',
          url: 'hobbies'
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
  color: #FF9B17;
}
</style>
