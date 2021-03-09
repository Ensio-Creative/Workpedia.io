<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="works in fliteredFreelance"
            :key="works._id"
            class="col"
          >
            <div class="card h-100">
              <img src="~/assets/img/Kentwood_Phone_03B-1280x850.jpg" alt="">
              <div class="card-body">
                <div class="private-tutor-text">
                  <div class="freelance-text">
                    <h3>{{ works.title }}</h3>
                  </div>
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
              <!-- <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> -->
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
