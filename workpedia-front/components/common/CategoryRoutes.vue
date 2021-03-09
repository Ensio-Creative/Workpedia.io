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
              :to="route.url"
            >
              {{ route.title }}
            </NuxtLink>
            <input type="email" class="form-control gray" placeholder="Search">
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'CategoryRoutes',
  data () {
    return {
      tutorRoutes: [
        {
          title: 'Mathematics',
          url: '/tutor/categories/mathematics'
        },
        {
          title: 'English',
          url: '/tutor/categories/english'
        },
        {
          title: 'Sciences',
          url: '/tutor/categories/sciences'
        },
        {
          title: 'Arts',
          url: '/tutor/categories/arts'
        },
        {
          title: 'Computer Sciences',
          url: '/tutor/categories/computer-sciences'
        },
        {
          title: 'Business',
          url: '/tutor/categories/businesss'
        },
        {
          title: 'Religion',
          url: '/tutor/categories/religion'
        }
      ],
      jobsRoutes: [
        {
          title: 'Design',
          url: '/jobs/categories/design'
        },
        {
          title: 'Web Dev',
          url: '/jobs/categories/web-dev'
        },
        {
          title: 'Writing',
          url: '/jobs/categories/writing'
        },
        {
          title: 'Marketing',
          url: '/jobs/categories/marketing'
        },
        {
          title: 'Accounting',
          url: '/jobs/categories/accounting'
        },
        {
          title: 'Business',
          url: '/jobs/categories/business'
        },
        {
          title: 'Customer Service',
          url: '/jobs/categories/customer-service'
        }
      ],
      freelanceroutes: [
        {
          title: 'Design',
          url: '/freelancing/categories/design'
        },
        {
          title: 'Handymen',
          url: '/freelancing/categories/handymen'
        },
        {
          title: 'Animation',
          url: '/freelancing/categories/animation'
        },
        {
          title: 'Music',
          url: '/freelancing/categories/music'
        },
        {
          title: 'Programming',
          url: '/freelancing/categories/programming'
        },
        {
          title: 'Copywriting',
          url: '/freelancing/categories/copywriting'
        },
        {
          title: 'Business',
          url: '/freelancing/categories/business'
        }
      ]
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
        route = this.freelanceroutes
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
  height: 60vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-jobs-categories {
  background-image: url('~assets/img/Macbook.jpeg');
  height: 60vh;
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
  color: #FF9B17;
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
  color: #0DB47B;
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
  color: #2b7dc4;
}
</style>
