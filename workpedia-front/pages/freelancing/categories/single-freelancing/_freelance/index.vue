<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12">
            <div class="row justify-content-center">
              <div
                v-for="works in fliteredFreelance"
                :key="works._id"
                class="col-12 col-md-4 col-lg-4 popular-column"
              >
                <div class="freelance-img-head" />
                <div class="freelance-text">
                  <h3>{{ works.title }}</h3>
                </div>
                <div class="freelance-amount">
                  <p>${{ works.amount }}</p>
                </div>
                <div class="freelance-description">
                  <p>{{ works.description }}</p>
                </div>
                <NuxtLink
                  class="btn btn-outline-primary"
                  :to="`/freelancing/categories/single-freelancing/${works._id}/get-gig`"
                >
                  Apply
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Testimony />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'SingleFreelance',
  data () {
    return {
      routeUrl: this.$route.params.freelance
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    fliteredFreelance () {
      const result = this.freelancing.filter(freelance => freelance._id === this.routeUrl)
      return result
    }
  }
}
</script>

<style scoped>

</style>
