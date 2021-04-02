<template>
  <div>
    <!-- Top nav -->
    <TopNavInfo />
    <!-- Side nav -->
    <div
      :class="[!resize ? 'sidenav-backdrop' : '']"
    >
      <transition name="slide-side">
        <div :class="[!resize ? 'sidenav' : 'sidenav-resided']">
          <nav class="">
            <div class="hide-icon">
              <a
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
              </a>
            </div>
            <!-- First Nav items -->
            <SuperUser
              :check-resize="resize"
            />
            <!-- <hr> -->
            <!-- Remaining nav items -->
          </nav>
        </div>
      </transition>
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DashBoardLayout',
  middleware: 'auth',
  data () {
    return {
      resize: false
    }
  },
  mounted () {
    this.resize = this.$store.state.resized
  },
  methods: {
    resized () {
      if (this.$store.state.resized === false) {
        this.$store.commit('RESIZE', true)
        this.resize = true
      } else {
        this.$store.commit('RESIZE', false)
        this.resize = false
      }
    }
  }
}
</script>

<style scoped>
/* .sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
} */
.sidenav {
  background-color: #0C0573;
  width: 140px;
  height: 100vh;
  z-index: 10000;
  position: fixed;
  top: 0px;
  left: 0;
}
.sidenav-resided {
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
  padding-bottom: 40px;
  padding-top: 40px;
}
.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateX(-100%);
}

hr{
  background-color: #fff;
}
</style>
