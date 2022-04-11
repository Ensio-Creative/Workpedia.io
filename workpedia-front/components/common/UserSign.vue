<template>
  <div>
    <div
      v-if="!user.token"
      class="user-not-logged-in"
    >
      <button
        class="btn landing-outline ml-3"
        @click="hasAccount(true)"
      >
        Login
      </button>
      <button
        class="btn landing-outline ml-1"
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
          <div
            class="userSign-img"
            :style="{backgroundImage: 'url('+ `${envVarable}/${user.imageUrl}` +')'}"
          />
          <i class="fas fa-chevron-down" />
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
const vars = process.env.BASE_URL
export default {
  name: 'UserRegister',
  data () {
    return {
      showUserDroped: false,
      userOnDashboard: false,
      authenticated: false,
      envVarable: vars
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
  },
  methods: {
    // fetchImage()
    hasAccount (value) {
      this.$store.commit('HAS_ACCOUNT', value)
      this.$router.push('/auth')
    },
    checkPath () {
      if (this.$route.path.includes('/dashboard') || this.$route.path.includes('/admin')) {
        this.userOnDashboard = false
        // console.log('I fired!!!!')
      } else {
        this.userOnDashboard = true
        // console.log(this.$route.params.name)
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
    logOut () {
      this.$router.push('/')
      this.$store.commit('CLEAR_USER')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.userSign-img {
  margin-top: 0px;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 30px;
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
  color: #251e8c;
}
.landing-outline:nth-child(2) {
  border: 2px solid #251e8c;
  border-radius: 6px;
  color: #251e8c;
}

.show-bar{
  visibility: hidden;
}
.dropbtn {
  display: flex;
  /* width: 60px; */
  justify-content: space-evenly;
  color: white;
  padding: 0px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: block;
  width: 105px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: -3px;
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
i {
  color: #000;
  align-self: center;
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
