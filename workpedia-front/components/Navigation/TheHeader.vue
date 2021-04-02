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
import homeNav from '~/static/baseNav/home.js'
import tutorNav from '~/static/baseNav/tutor.js'
import jobsNav from '~/static/baseNav/jobs.js'
import freelanceNav from '~/static/baseNav/freelance.js'
export default {
  name: 'TheHeader',
  data () {
    return {
      homeNav,
      tutorNav,
      jobsNav,
      freelanceNav
    }
  },
  computed: {
    // Make nested if statements and check for the urls no longer
    // needed when the user is logged in or not and pop them out of the array
    routes () {
      let route = ''
      if (this.$route.path === '/') {
        route = this.homeNav
      } else if (this.$route.path.includes('/tutor')) {
        route = this.tutorNav
      } else if (this.$route.path.includes('/jobs')) {
        route = this.jobsNav
      } else if (this.$route.path.includes('/freelancing')) {
        route = this.freelanceNav
      }
      return route
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
