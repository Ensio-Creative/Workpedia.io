<template>
  <div>
    <div
      v-if="$nuxt.isOffline"
      class="network"
    >
      No internet connection
      <i class="fa fa-stop-circle" />
    </div>
    <div
      class="sidenav-backdrop"
    >
      <div
        class="sidenav"
      >
        <nav class="">
          <div class="hide-icon">
            <NuxtLink
              to="/"
            >
              <img src="~/assets/img/Workpedia logo transparent (White).png" alt="">
            </NuxtLink>
          </div>
          <!-- First Nav items -->
          <AdminDash
            :check-resize="resize"
            class="desktop"
          />
          <!-- <hr> -->
          <!-- Remaining nav items -->
        </nav>
      </div>
      <!-- Mobile -->
      <client-only>
        <div
          v-if="showMobile"
          class="sidenav"
          :style="[showMobile ? 'transition: 6s' : '']"
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
            <AdminMobile
              :check-resize="resize"
            />
            <!-- <hr> -->
            <!-- Remaining nav items -->
          </nav>
        </div>
      </client-only>
      <!-- <div
        class="show-bar"
        @click="checkShow"
      >
        <i class="fas fa-bars" />
      </div> -->
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AdminDash from '~/components/Navigation/admin/AdminDash.vue'
import AdminMobile from '~/components/Navigation/admin/AdminMobile.vue'
export default {
  name: 'AdminLayout',
  components: { AdminDash, AdminMobile },
  middleware ({ store, redirect }) {
    // If the user is not authenticated
    if (!store.state.auth.user.token) {
      return redirect('/auth')
    }
  },
  data () {
    return {
      resize: false,
      show: false
    }
  },
  computed: {
    ...mapState(['mobileDash', 'responses', 'errors']),
    showMobile () {
      const result = this.mobileDash
      return result
    }
  },
  mounted () {
    // this.resize = this.$store.state.resized
    this.show = this.mobileDash
  },
  methods: {
    // resized () {
    //   if (this.$store.state.resized === false) {
    //     this.$store.commit('RESIZE', true)
    //     this.resize = true
    //   } else {
    //     this.$store.commit('RESIZE', false)
    //     this.resize = false
    //   }
    // }
    checkShow (value) {
      if (!this.show) {
        this.show = true
      } else {
        this.show = false
      }
    }
  }
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
.sidenav:nth-child(2) {
  display: none;
}
.sidenav-resided {
  display: none;
  background-color: var(--bg-dark-blue);
  width: 100px;
  height: 100vh;
  position: fixed;
  z-index: 10000;
  top: 0;
  left: 0;
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
.show-bar{
  visibility: hidden;
}
.side-mobile{
  display: none;
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
  .side-mobile{
  display: block;
}
}
</style>
