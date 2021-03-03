<template>
  <div>
    <div
      v-if="!isUserLoggedIn"
      class="user-not-logged-in"
    >
      <NuxtLink
        to="/auth"
        class="btn"
        :class="changeBtn()"
      >
        Sign in
      </NuxtLink>
      <NuxtLink
        to="/auth"
        class="btn ml-3"
        :class="changeBtn()"
      >
        Register for free
      </NuxtLink>
    </div>
    <div
      v-if="isUserLoggedIn"
      class="user-is-logged-in"
    >
      <div class="list-of-users-action">
        <a
          href="#"
          @click="showUserDrop"
        >
          <img class="rounded" src="~assets/img/avatar_c@2x.png" alt="">
        </a>
        <ul
          v-if="showUserDroped"
          class="list-group postions text-center"
        >
          <NuxtLink
            v-if="userOnDashboard"
            to="/dashboard"
            class="list-group-item postions-items"
          >
            Dashboard
          </NuxtLink>
          <NuxtLink
            v-else
            to="/"
            class="list-group-item postions-items"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="dashboard/settings"
            class="list-group-item postions-items"
          >
            Settings
          </NuxtLink>
          <li class="list-group-item postions-items">
            LogOut
          </li>
        </ul>
      </div>
      <div class="list-of-users-action">
        <a href="#">
          <i class="far fa-bell" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserRegister',
  data () {
    return {
      isUserLoggedIn: false,
      showUserDroped: false,
      userOnDashboard: false
    }
  },
  mounted () {
    this.checkPath()
  },
  methods: {
    checkPath () {
      if (this.$route.path === '/dashboard') {
        this.userOnDashboard = false
        console.log('I fired!!!!')
      } else {
        this.userOnDashboard = true
        console.log(this.$route.params.name)
      }
    },
    showUserDrop () {
      if (this.showUserDroped === true) {
        this.showUserDroped = false
        console.log('Work na!!!!!')
      } else {
        this.showUserDroped = true
        console.log('Work no!!!!!')
      }
    },
    changeBtn () {
      let btnClass = ''
      if (this.$route.path === '/') {
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
.landing-outline {
  border: 2px solid #251e8c;
  border-radius: 6px;
  padding: 8px;
}
.landing-outline:nth-child(3) {
  background-color: #251e8c;
  color: #fff;
}
.turor-outline {
  border: 2px solid #ff9b17;
  border-radius: 6px;
  padding: 8px;
}
.tutor-outline:nth-child(3) {
  background-color: #ff9b17;
  color: #fff;
}
.jobs-outline {
  border: 2px solid #0db47b;
  border-radius: 6px;
  padding: 8px;
}
.jobs-outline:nth-child(3) {
  background-color: #0db47b;
  color: #fff;
}
.freelance-outline {
  border: 2px solid #2b7dc4;
  border-radius: 6px;
  padding: 8px;
}
.freelance-outline:nth-child(3) {
  background-color: #2b7dc4;
  color: #fff;
}
</style>
