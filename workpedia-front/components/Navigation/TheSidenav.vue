<template>
  <div class="sidenav-container">
    <div
      v-if="show"
      class="sidenav-backdrop"
      @click="$emit('close')"
    />
    <transition name="slide-side">
      <div
        v-if="show"
        class="sidenav"
      >
        <ul
          class="nav-list"
          @click="$emit('close')"
        >
          <li
            v-for="links in routes"
            :key="links.url"
            class="nav-item"
          >
            <NuxtLink
              :to="links.url"
            >
              {{ links.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import homeNav from '~/static/baseNav/home.js'
import tutorNav from '~/static/baseNav/tutor.js'
import jobsNav from '~/static/baseNav/jobs.js'
import freelanceNav from '~/static/baseNav/freelance.js'
export default {
  name: 'TheSidenav',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      homeNav,
      tutorNav,
      jobsNav,
      freelanceNav
    }
  },
  computed: {
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
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: 100%;
  width: 300px;
  background-color: white;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 18px;
}

.nav-item {
  margin: 20px 0;
}

.nav-item a {
  text-decoration: none;
  color: #0C0573;
}

.nav-item a:hover,
.nav-item a:active {
  color: #0C0573;
}
</style>
