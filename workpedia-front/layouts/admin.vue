<template>
  <div>
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
    <!-- <Responses /> -->
    <Nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdminLayout',
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
  background-color: #0C0573;
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
  background-color: #0C0573;
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
