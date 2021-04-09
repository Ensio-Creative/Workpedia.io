<template>
  <div>
    <div
      :class="[!resize ? 'sidenav-backdrop' : '']"
    >
      <transition name="slide-side">
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
            <AdminDash
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
  name: 'AdminLayout',
  data () {
    return {
      resize: false
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
  padding-bottom: 55px;
  padding-top: 17px;
}
.hide-icon img {
  width: 56px;
}
</style>
