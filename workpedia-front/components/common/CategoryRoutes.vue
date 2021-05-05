<template>
  <div>
    <div
      class="container my-3"
      :class="bgHero"
    />
    <!-- Categories Nav -->
    <nav
      class="navbar navbar-expand-lg"
      :class="urlColors"
    >
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
          <p class="text-center">
            Categories
          </p>
        </button>
        <div
          id="navbarNav"
          class="collapse navbar-collapse"
        >
          <ul class="navbar-nav">
            <NuxtLink
              class="nav-link active"
              :to="`/${allCategories}/categories`"
            >
              All Categories
            </NuxtLink>
            <NuxtLink
              v-for="(route) in routes"
              :key="route.url"
              class="nav-link mr-3"
              :to="`${checkUrl}${route.url}`"
            >
              {{ route.title }}
            </NuxtLink>
            <!-- <input type="email" class="form-control gray" placeholder="Search"> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import tutorRoutes from '~/static/tutor/tutorRoutes.js'
import jobsRoutes from '~/static/jobs/jobsRoutes.js'
import freelanceRoutes from '~/static/freelance/freelanceRoutes.js'
export default {
  name: 'CategoryRoutes',
  data () {
    return {
      tutorRoutes,
      jobsRoutes,
      freelanceRoutes
    }
  },
  computed: {
    routes () {
      let route = ''
      if (this.$route.path.includes('/tutor')) {
        route = this.tutorRoutes
      } else if (this.$route.path.includes('/jobs')) {
        route = this.jobsRoutes
      } else if (this.$route.path.includes('/freelancing')) {
        route = this.freelanceRoutes
      }
      return route
    },
    checkUrl () {
      let route = ''
      if (this.$route.path.includes('/tutor')) {
        route = '/tutor/categories/'
      } else if (this.$route.path.includes('/jobs')) {
        route = '/jobs/categories/'
      } else if (this.$route.path.includes('/freelancing')) {
        route = '/freelancing/categories/'
      }
      return route
    },
    allCategories () {
      let route = ''
      if (this.$route.path.includes('/tutor')) {
        route = 'tutor'
      } else if (this.$route.path.includes('/jobs')) {
        route = 'jobs'
      } else if (this.$route.path.includes('/freelancing')) {
        route = 'freelancing'
      }
      return route
    },
    urlColors () {
      let color = ''
      if (this.$route.path.includes('/tutor')) {
        color = 'categories-nav'
      } else if (this.$route.path.includes('/jobs')) {
        color = 'jobscategories-nav'
      } else if (this.$route.path.includes('/freelancing')) {
        color = 'freelancecategories-nav'
      }
      return color
    },
    bgHero () {
      let bg = ''
      if (this.$route.path.includes('/tutor')) {
        bg = 'bg-categories'
      } else if (this.$route.path.includes('/jobs')) {
        bg = 'bg-jobs-categories'
      } else if (this.$route.path.includes('/freelancing')) {
        bg = 'bg-freelance-categories'
      }
      return bg
    }
  }
}
</script>

<style scoped>
.bg-categories {
  background-image: url('~assets/img/pexels-photo-1194420.jpeg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-jobs-categories {
  background-image: url('~static/img/workpedia-jobs-header.svg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-freelance-categories {
  background-image: url('~assets/img/pexels-photo-50614.jpeg');
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav a:hover,
.categories-nav a:active,
.categories-nav a.nuxt-link-active {
  color: #251E8C;
}
.jobscategories-nav{
  background-color: #fff;
}
.jobscategories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.jobscategories-nav a:hover,
.jobscategories-nav a:active,
.jobscategories-nav a.nuxt-link-active {
  color: #251E8C;
}

.freelancecategories-nav{
  background-color: #fff;
}
.freelancecategories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.freelancecategories-nav a:hover,
.freelancecategories-nav a:active,
.freelancecategories-nav a.nuxt-link-active {
  color: #251E8C;
}
</style>
