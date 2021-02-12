<template>
  <div>
    <div
      v-if="!isUserLoggedIn"
      class="user-not-logged-in"
    >
      <NuxtLink
        to="/auth"
        class="btn landing-outline"
      >
        Sign in
      </NuxtLink>
      <NuxtLink
        to="/auth"
        class="btn landing-outline ml-3"
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
      isUserLoggedIn: true,
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
</style>
