<template>
  <div>
    <div
      v-if="!authenticated"
      class="user-not-logged-in"
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
    </div>
    <div
      v-else
      class="user-is-logged-in"
    >
      <div class="dropdown">
        <a
          href="#"
          class="dropbtn"
        >
          <!-- <img class="rounded" :src="" alt="user-image"> -->
          <div
            class="user-img"
            :style="{backgroundImage: 'url('+ `http://localhost:8000/${user.imageUrl}` +')'}"
          />
          <i class="fas fa-angle-down" />
        </a>
        <div
          class="dropdown-content text-center"
        >
          <NuxtLink
            v-if="user.token && !user.isAdmin && !user.isOperator"
            to="/dashboard"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink
            v-if="user.isAdmin || user.isOperator"
            to="/admin"
          >
            Admin
          </NuxtLink>
          <NuxtLink
            v-if="!userOnDashboard"
            to="/"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="dashboard/settings"
          >
            Settings
          </NuxtLink>
          <a
            href="#"
            @click="logOut"
          >
            Log Out
          </a>
        </div>
      </div>
      <div
        v-if="showCross"
        class="list-of-users-action show-bar"
        @click="$store.commit('MOBILE_DASH', true)"
      >
        <a href="#">
          <i class="fas fa-bars" />
        </a>
      </div>
      <div
        v-else
        class="list-of-users-action show-bar"
        @click="$store.commit('MOBILE_DASH', false)"
      >
        <a href="#">
          <i class="fas fa-bars" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'UserRegister',
  data () {
    return {
      showUserDroped: false,
      userOnDashboard: false,
      authenticated: false
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    showCross () {
      const result = !this.$store.state.mobileDash
      return result
    }
  },
  mounted () {
    this.checkPath()
    this.loggedIn()
  },
  methods: {
    // fetchImage()
    hasAccount (value) {
      this.$store.commit('HAS_ACCOUNT', value)
      this.$router.push('/auth')
    },
    checkPath () {
      if (this.$route.path.includes('/dashboard')) {
        this.userOnDashboard = false
        // console.log('I fired!!!!')
      } else {
        this.userOnDashboard = true
        // console.log(this.$route.params.name)
      }
    },
    loggedIn () {
      if (this.user.token) {
        this.authenticated = true
      } else {
        this.authenticated = false
      }
    },
    showUserDrop () {
      if (this.showUserDroped === true) {
        this.showUserDroped = false
        // console.log('Work na!!!!!')
      } else {
        this.showUserDroped = true
        // console.log('Work no!!!!!')
      }
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
    },
    logOut () {
      this.$router.push('/')
      this.$store.commit('CLEAR_USER')
    }
  }
}
</script>

<style scoped>
.user-img {
  margin-top: 0px;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
}
.list-of-users-action {
  display: inline;
  padding: 10px;
  font-size: 25px;
}
.list-of-users-action img {
  width: 33px;
}

.list-of-users-action a {
  color: #0C0573;
  text-decoration: none;
}
.postions{
  width: 107px;
  position: fixed;
  /* display: none; */
  z-index: 1000;
  right: 116px;
  top: 49px;
}
.postions a {
  color: #000;
}
.postions-items{
  padding: 10px;
  font-size: 18px;
}
.postions-items:nth-child(3){
  cursor: pointer;
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
.show-bar{
  visibility: hidden;
}
.dropbtn {
  color: white;
  padding: 0px;
  font-size: 16px;
  border: none;
}
.dropbtn img{
  width: 42px;
}
/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: -20px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}
@media screen and (max-width: 780px) {
  .show-bar {
    visibility: visible;
    float: right;
  }
}
</style>
