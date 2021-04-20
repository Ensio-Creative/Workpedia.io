<template>
  <div class="header-container">
    <header class="the-header container">
      <div class="nav-img">
        <NuxtLink to="/">
          <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
        </NuxtLink>
      </div>
      <div class="spacer" />
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div class="navigation-items">
        <ul class="nav-list">
          <li
            v-for="links in routes"
            :key="links.url"
            class="nav-item"
          >
            <NuxtLink
              class="mt-3"
              :to="links.url"
            >
              {{ links.title }}
            </NuxtLink>
          </li>
          <UserSign />
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import homeNav from '~/static/baseNav/home.js'
import tutorNav from '~/static/baseNav/tutor.js'
import jobsNav from '~/static/baseNav/jobs.js'
import freelanceNav from '~/static/baseNav/freelance.js'
export default {
  name: 'TheHeader',
  // Every data been imported has Nav added to it that the inital routes
  // Then the other ones are the data gotten from filtering the initial data
  data () {
    return {
      homeNav,
      tutorNav,
      jobsNav,
      freelanceNav,
      tutor: [],
      jobs: [],
      freelance: []
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    // The function here is using the data filtered already when the compnent was mounted
    routes () {
      let route = ''
      if (this.$route.path === '/' || this.$route.path === '/about-us') {
        route = this.homeNav
      } else if (this.$route.path.includes('/tutor')) {
        route = this.tutor
      } else if (this.$route.path.includes('/jobs')) {
        route = this.jobs
      } else if (this.$route.path.includes('/freelancing')) {
        route = this.freelance
      }
      return route
    }
  },
  mounted () {
    // Mounted the fuctions to filter and send the needed routes to be used
    this.checkTutorNav()
    this.checkJobs()
    this.checkFreelance()
  },
  methods: {
    // Here are the functions used by there names
    checkTutorNav () {
      if (this.user.isTutor) {
        this.tutor = this.tutorNav.filter(tutorRoute => tutorRoute.url !== '/tutor/become-a-tutor')
        return this.tutor
      } else {
        this.tutor = this.tutorNav
      }
    },
    checkJobs () {
      if (this.user.isApplicant || this.user.isHire) {
        this.jobs = this.jobsNav.filter(jobsRoute => jobsRoute.url !== '/jobs/hire')
        return this.jobs
      } else {
        this.jobs = this.jobsNav
      }
    },
    checkFreelance () {
      if (this.user.isFreelancer) {
        this.freelance = this.freelanceNav.filter(freelanceRoute => freelanceRoute.url !== '/freelancing/become-freelancer')
        return this.freelance
      } else {
        this.freelance = this.freelanceNav
      }
    }
  }
}
</script>

<style scoped>
.header-container {
  height: 60px;
  background-color: #fff;
}

.the-header {
  display: flex;
  color: #0C0573;
  padding: 20px 18px;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.spacer {
  flex: 1;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
  .header-container {
  background-color: #fff;
}
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 18px;
}

.nav-item {
  margin: 0 10px;
  padding-top: 5px;
}

.nav-item a {
  text-decoration: none;
  color: #0C0573;
}

.nav-item a:hover,
.nav-item a:active,
.nav-item a.NuxtLink-active {
  color: #0C0573;
}
</style>
