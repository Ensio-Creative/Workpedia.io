<template>
  <div
    class="side-nav-container"
  >
    <div class="side-nav-links">
      <a
        href="#"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="home"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
        @click="$router.push('/')"
      >
        <i class="fas fa-home" />
        <span>
          Home
        </span>
      </a>
      <NuxtLink
        to="/admin"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="admin"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-clipboard-list" />
        <span>
          Dashboard
        </span>
      </NuxtLink>
      <NuxtLink
        to="/admin/users"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="admin"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-user" />
        <span>
          Users
        </span>
      </NuxtLink>
      <!-- <NuxtLink
        to="/admin/messages"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="Messages"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="far fa-envelope-open" />
        <span>
          Messages
        </span>
      </NuxtLink> -->
      <NuxtLink
        to="/admin/tutors"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="Tutor"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-chalkboard-teacher" />
        <span>
          Tutor
        </span>
      </NuxtLink>
      <NuxtLink
        to="/admin/jobs"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="Jobs"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-suitcase" />
        <span>
          Jobs
        </span>
      </NuxtLink>
      <NuxtLink
        to="/admin/freelance"
        data-toggle="Freelance"
        data-placement="right"
        class="mb-2"
        title="Freelance"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-search" />
        <span>
          Freelance
        </span>
      </NuxtLink>
      <NuxtLink
        to="/admin/payments"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="Payments"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-money-check-alt" />
        <span>
          Payments
        </span>
      </NuxtLink>
    </div>
    <div class="side-nav-links bottom-links">
      <NuxtLink
        to="/admin/settings"
        data-toggle="LogOut"
        data-placement="right"
        title="Settings"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-cog" />
        <span>
          Settings
        </span>
      </NuxtLink>
      <NuxtLink
        to="/logot"
        data-toggle="LogOut"
        data-placement="right"
        title="Logout"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-sign-out-alt" />
        <span>
          Logout
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'FirstNav',
  props: {
    checkResize: Boolean
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
  }
}
</script>

<style scoped>
.side-nav-item {
  display: block;
  color: #fff;
  letter-spacing: 0px;
  font-size: 14px;
  width: 140px;
}

.side-nav-item-resized {
  display: block;
  color: #fff;
  font-size: 22px;
  text-align: center;
  width: 100px;
  padding: 17px;
  height: 60px;
}
.side-nav-item-resized span {
  font-size: 14px;
}
.side-nav-item:hover,
.nuxt-link-active {
  border-right: 2px solid var(--bg-yellow);
  color: var(--bg-yellow);
}
.side-nav-item-resized:hover,
.nuxt-link-active {
  color: var(--bg-yellow);
}

.side-nav-item-resized i {
  padding: 5px;
}
.side-nav-item:hover {
  text-decoration: none;
}
.side-nav-item i {
  padding: 15px;
  font-size: 18px;
}
</style>
