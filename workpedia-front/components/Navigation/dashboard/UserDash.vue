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
        to="/dashboard"
        data-toggle="LogOut"
        data-placement="right"
        class="mb-2"
        title="Dashboard"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-clipboard-list" />
        <span>
          Dashboard
        </span>
      </NuxtLink>
      <!-- <NuxtLink
        to="/dashboard/messages"
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
      <!-- <NuxtLink
        to="/dashboard/payments"
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
      </NuxtLink> -->
      <NuxtLink
        v-if="tutor"
        to="/dashboard/tutor"
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
        v-if="applicant"
        to="/dashboard/jobs"
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
      <!-- This is for the hirer -->
      <NuxtLink
        v-if="hire"
        to="/dashboard/hire"
        data-toggle="Hire"
        data-placement="right"
        class="mb-2"
        title="Jobs"
        :class="[!checkResize ? 'side-nav-item' : 'side-nav-item-resized']"
      >
        <i class="fas fa-suitcase" />
        <span>
          Hire
        </span>
      </NuxtLink>
      <NuxtLink
        v-if="freelance"
        to="/dashboard/freelance"
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
    </div>
    <div class="side-nav-links bottom-links">
      <NuxtLink
        to="/dashboard/settings"
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
      tutor: false,
      applicant: false,
      hire: false,
      freelance: false
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  mounted () {
    this.checkTutor()
    this.checkApplicant()
    this.checkHire()
    this.checkFreelance()
  },
  methods: {
    // When ever I try using the state from the vuex to condition the links it results
    // to an error so i used functions and call them on mouted to change the data above
    // to either ture or false
    checkTutor () {
      if (this.user.isTutor) {
        this.tutor = true
        return this.tutor
      } else {
        this.tutor = false
        return this.tutor
      }
    },
    checkApplicant () {
      if (this.user.isApplicant) {
        this.applicant = true
        return this.applicant
      } else {
        this.applicant = false
        return this.applicant
      }
    },
    checkHire () {
      if (this.user.isHire) {
        this.hire = true
        return this.hire
      } else {
        this.hire = false
        return this.hire
      }
    },
    checkFreelance () {
      if (this.user.isFreelancer) {
        this.freelance = true
        return this.freelance
      } else {
        this.freelance = false
        return this.freelance
      }
    }
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
  font-weight: bold;
}

.side-nav-item-resized {
  display: block;
  color: #fff;
  font-size: 22px;
  text-align: center;
  width: 100px;
  font-weight: bold;
  padding: 17px;
  height: 60px;
}
.side-nav-item-resized span {
  font-size: 14px;
}
.side-nav-item:hover,
.nuxt-link-active {
  border-right: 2px solid #ff9b17;
  color: #ff9b17;
}
.side-nav-item-resized:hover,
.nuxt-link-active {
  color: #ff9b17;
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
