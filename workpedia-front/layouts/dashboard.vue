<template>
  <div>
    <!-- Side nav -->
    <div
      v-if="$nuxt.isOffline"
      class="network"
    >
      No internet connection
      <i class="fa fa-stop-circle" />
    </div>
    <div
      :class="[!resize ? 'sidenav-backdrop' : '']"
    >
      <div :class="[!resize ? 'sidenav' : 'sidenav-resided']">
        <nav class="">
          <div class="hide-icon">
            <NuxtLink
              to="/"
            >
              <img src="~/assets/img/Workpedia logo transparent (White).png" alt="">
            </NuxtLink>
            <!-- <a
              v-if="resize === false"
              href="#"
              @click="resized"
            >
              <img src="~assets/img/arrow-circle-left.svg" alt="">
            </a>
            <a
              v-if="resize === true"
              href="#"
              @click="resized"
            >
              <img src="~assets/img/arrow-circle-left (1).svg" alt="">
            </a> -->
          </div>
          <!-- First Nav items -->
          <UserDash
            :check-resize="resize"
          />
          <!-- <hr> -->
          <!-- Remaining nav items -->
        </nav>
      </div>
      <div
        v-if="showMobile"
        :class="[!resize ? 'sidenav' : 'sidenav-resided']"
      >
        <nav class="">
          <div class="hide-icon">
            <NuxtLink
              to="/"
            >
              <img src="~/assets/img/Workpedia logo transparent (White).png" alt="">
            </NuxtLink>
            <!-- <a
              v-if="resize === false"
              href="#"
              @click="resized"
            >
              <img src="~assets/img/arrow-circle-left.svg" alt="">
            </a>
            <a
              v-if="resize === true"
              href="#"
              @click="resized"
            >
              <img src="~assets/img/arrow-circle-left (1).svg" alt="">
            </a> -->
          </div>
          <!-- First Nav items -->
          <Mobile
            :check-resize="resize"
          />
          <!-- <hr> -->
          <!-- Remaining nav items -->
        </nav>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Mobile from '~/components/Navigation/dashboard/Mobile.vue'
import UserDash from '~/components/Navigation/dashboard/UserDash.vue'
export default {
  name: 'DashBoardLayout',
  components: { UserDash, Mobile },
  data () {
    return {
      resize: false
    }
  },
  computed: {
    ...mapState(['mobileDash']),
    showMobile () {
      const result = this.mobileDash
      return result
    }
  }
  // mounted () {
  //   this.resize = this.$store.state.resized
  // },
  // methods: {
  //   resized () {
  //     if (this.$store.state.resized === false) {
  //       this.$store.commit('RESIZE', true)
  //       this.resize = true
  //     } else {
  //       this.$store.commit('RESIZE', false)
  //       this.resize = false
  //     }
  //   }
  // }
}
</script>

<style scoped>
.sidenav {
  background-color: var(--bg-dark-blue);
  width: 140px;
  height: 100vh;
  z-index: 10000;
  position: fixed;
  top: 0px;
  left: 0;
}
.sidenav-resided {
    background-color: var(--bg-dark-blue);
    width: 100px;
    height: 100vh;
    position: fixed;
    z-index: 10000;
    top: 0;
    left: 0;
}
.sidenav:nth-child(2) {
  display: none;
}
.hide-icon{
  color: #fff;
  text-decoration: none;
  text-align: center;
  padding-bottom: 55px;
  padding-top: 17px;
}
.hide-icon img {
  width: 56px;
}
@media screen and (max-width: 780px) {
  .show-bar {
    visibility: visible;
    float: right;
  }
  .desktop {
    display: none;
  }
  .sidenav{
    display: none;
  }
  .sidenav:nth-child(2) {
    display: block;
  }
  /* .sidenav-backdrop {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
} */
  /* .sidenav-resided{
    display: block;
  } */
  .side-mobile{
  display: block;
}
}
</style>
