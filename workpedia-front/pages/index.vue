<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around mt-5">
        <div class="col-12 col-md-12 col-lg-5 bg-texts order-6 order-sm-2">
          <div class="bg-content">
            <h1>
              Find your dream job, career and tutor all in one place.
            </h1>
            <p>
              Workpedia allows you get everything in one place, freelancing job opportunity, tutors and easily manage all three with ease.
            </p>
          </div>
          <client-only>
            <div
              v-if="!user.token"
              class="bg-buttons"
            >
              <NuxtLink class="view-btn" to="/auth">
                Get started
              </NuxtLink>
            </div>
          </client-only>
        </div>
        <div class="col-12 col-md-12 col-lg-7 order-2 order-sm-6">
          <div class="image-rap text-center">
            <img src="~/static/img/workpedia-home-image.svg">
          </div>
        </div>
      </div>
    </section>
    <!-- Walk you through -->
    <Walk />
    <section class="tutor-details">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 learn-more">
            <img src="@/static/img/workpedia-tutor.svg" alt="">
          </div>
          <div class="col-12 col-md-6 learn-more">
            <h2 class="title">
              Private Tutors
            </h2>
            <p>We understand that with exceptional and personalized coaching, learner's (be it your children or yourself) can master any subject or course of interet and attain lofty acedemic hights.</p>
            <NuxtLink
              to="/tutor"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="tutor-details">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 order-6 order-sm-2 learn-more-grid">
            <h2 class="title">
              Jobs
            </h2>
            <p>Workpedia seemlessly connects employers and vetted qulified employess in one place.</p>
            <NuxtLink
              to="/jobs"
            >
              Learn more
            </NuxtLink>
          </div>
          <div class="col-12 col-md-6 order-2 order-sm-6 learn-more">
            <img src="@/static/img/workpedia-jobs.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="tutor-details mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6 learn-more">
            <img src="@/static/img/workpedia-freelancer.svg" alt="">
          </div>
          <div class="col-12 col-md-6 learn-more">
            <h2 class="title">
              Freelancers & Handymen
            </h2>
            <p>Linking freelancers and vetted handymen to tasks in homes, offices and sites has never been easier.</p>
            <NuxtLink
              to="/freelancing"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- Private tutors -->
    <!-- <Tutors
      class="mt-5"
    /> -->
    <!-- Popular jobs -->
    <!-- <client-only>
      <Popular />
    </client-only> -->
    <!-- Freelancing gigs -->
    <!-- <Freelancing
      frelance-gigs="Connect with freelancers"
    /> -->
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import Footer from '../components/common/Footer.vue'
import NewsLetter from '../components/common/NewsLetter.vue'
// import Freelancing from '../components/landing/Freelancing.vue'
// import Popular from '../components/landing/Popular.vue'
// import Tutors from '../components/landing/Tutors.vue'
import Walk from '../components/landing/Walk.vue'
export default {
  name: 'Home',
  components: { Walk, NewsLetter, Footer },
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
    this.fetchData()
  },
  methods: {
    ...mapMutations('jobs', ['UPDATE_JOBS']),
    ...mapMutations('freelance', ['UPDATE_FREELANCING', 'UPDATE_FREELANCING_SETTING']),
    checkUSer () {
      if (!this.user.token) {
        this.isLogged = false
      } else {
        this.isLogged = true
      }
    },
    async fetchData () {
      const res = await this.$axios.$get('public/get-data')
      this.UPDATE_FREELANCING(res.freelancers)
      this.UPDATE_FREELANCING_SETTING(res.freelanceCategory.categories)
      this.UPDATE_JOBS(res.jobs)
    }
  }
}
</script>

<style scoped>
.bg-hero img{
  width: 640px;
  border-radius: 15px;
  height: 100%;
}
.bg-texts {
  margin-top: 100px;
  display: grid;
  justify-content: center;
}
.bg-content {
  width: 339px;
}
.image-rap {
  margin-top: 0px;
  height: 100%;
  overflow: visible;
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
  .learn-more{
    margin-bottom: 40px;
  }
  .learn-more-grid {
    display: block;
    margin-bottom: 40px;
  }
  .learn-more img {
    width: 100%;
  }
}
.learn-more-grid {
  align-self: center;
  display: grid;
  justify-content: end;
}
.learn-more-grid p {
  width: 364px;
  padding-bottom: 20px;
}

.learn-more-grid a {
  padding: 10px 12px;
  border: 1px solid var(--bg-dark-blue);
  color: var(--bg-dark-blue);
  border-radius: 30px;
  display: block;
  width: 116px;
}
.learn-more {
  align-self: center;
}

.learn-more h2 {
  color: var(--bg-dark-blue);
}

.learn-more img {
  width: 600px;
}

.learn-more p {
  width: 399px;
  margin-bottom: 20px;
  padding-bottom: 20px;
}
.learn-more a {
  padding: 12px;
  border: 1px solid var(--bg-dark-blue);
  color: var(--bg-dark-blue);
  border-radius: 30px;
}
</style>
