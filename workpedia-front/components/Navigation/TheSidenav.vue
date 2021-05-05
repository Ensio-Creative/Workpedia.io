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
          <li
            v-if="user.isAdmin || user.isOperator"
            class="nav-item"
          >
            <NuxtLink
              to="/admin"
            >
              Admin
            </NuxtLink>
          </li>
          <li
            v-if="user.token && !user.isAdmin && !user.isOperator"
            class="nav-item"
          >
            <NuxtLink
              to="/dashboard"
            >
              Dashboard
            </NuxtLink>
          </li>
          <li
            v-if="user.token"
            class="nav-item"
          >
            <a
              href="#"
              @click="logOut"
            >
              LogOut
            </a>
          </li>
          <li
            v-if="!user.token"
            class="nav-item"
          >
            <button
              class="btn"
              :class="changeBtn()"
              @click="hasAccount(true)"
            >
              Login
            </button>
            <button
              class="btn ml-1"
              :class="changeBtn()"
              @click="hasAccount(false)"
            >
              Get Started
            </button>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex'
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
      freelanceNav,
      tutor: [],
      jobs: [],
      freelance: []
    }
  },
  computed: {
    ...mapState('auth', ['user']),
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
    },
    logOut () {
      this.$router.push('/')
      this.$store.commit('CLEAR_USER')
    },
    hasAccount (value) {
      this.$store.commit('HAS_ACCOUNT', value)
      this.$router.push('/auth')
    },
    changeBtn () {
      let btnClass = ''
      if (this.$route.path === '/' || this.$route.path === '/about-us') {
        btnClass = 'landing-outline'
      } else if (this.$route.path.includes('/tutor')) {
        btnClass = 'turor-outline'
      } else if (this.$route.path.includes('/jobs')) {
        btnClass = 'jobs-outline'
      } else if (this.$route.path.includes('/freelancing')) {
        btnClass = 'freelance-outline'
      }

      return btnClass
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
.landing-outline {
  border: 2px solid #251e8c;
  border-radius: 6px;
}
.landing-outline:nth-child(3) {
  background-color: #251e8c;
  color: #fff;
}
.turor-outline {
  border: 2px solid #ff9b17;
  border-radius: 6px;
}
.tutor-outline:nth-child(3) {
  background-color: #ff9b17;
  color: #fff;
}
.jobs-outline {
  border: 2px solid #0db47b;
  border-radius: 6px;
}
.jobs-outline:nth-child(3) {
  background-color: #0db47b;
  color: #fff;
}
.freelance-outline {
  border: 2px solid #2b7dc4;
  border-radius: 6px;
}
.freelance-outline:nth-child(3) {
  background-color: #2b7dc4;
  color: #fff;
}
</style>
