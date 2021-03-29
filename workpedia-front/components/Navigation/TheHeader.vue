<template>
  <div class="container header-container">
    <header class="the-header">
      <div class="navbar-brand">
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
    // needed and pop them out of the array
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
}

.the-header {
  width: 90%;
  position: fixed;
  height: 60px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #0C0573;
  background-color: #fff;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 20px;
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
