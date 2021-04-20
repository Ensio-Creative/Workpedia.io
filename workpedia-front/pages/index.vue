<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around mt-5">
        <div class="col-12 col-md-12 col-lg-6 bg-texts order-6 order-sm-2">
          <h1>
            Find your dream job, career and tutor all in one place.
          </h1>
          <p>
            Workpedia allows you get everything in once place, freelancing job opportunity, tutors and easily manage all three with ease.
          </p>
          <div
            v-if="!isLogged"
            class="bg-buttons"
          >
            <NuxtLink class="view-btn" to="/auth">
              Start Now
            </NuxtLink>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6">
          <div class="image-rap text-center">
            <img src="~/static/img/home.jpg">
          </div>
        </div>
      </div>
    </section>
    <!-- Walk you through -->
    <Walk />
    <!-- Private tutors -->
    <Tutors
      class="mt-5"
    />
    <!-- Popular jobs -->
    <Popular />
    <!-- Freelancing gigs -->
    <Freelancing
      frelance-gigs="Get your Freelancing/Handymen gigs"
    />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      isLogged: false
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    checkIfLoggedIn () {
      const result = !this.user.token
      return result
    }
  },
  mounted () {
    this.checkUSer()
  },
  methods: {
    checkUSer () {
      if (!this.user.token) {
        this.isLogged = false
      } else {
        this.isLogged = true
      }
    }
  }
}
</script>

<style scoped>
.bg-hero img{
  width: 527px;
  border-radius: 15px;
  height: 91%;
}

@media screen and (max-width: 780px){
  .bg-texts {
    margin-top: 0px;
}
.bg-hero img {
  width: 366px;
  margin-bottom: 0px;
  height: 271px;
  border-radius: 0px;
}
}

</style>
