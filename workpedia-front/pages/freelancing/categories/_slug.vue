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
                class="col-12 col-md-3 col-lg-3 popular-column"
              >
                <FreelanceList
                  :id="works._id"
                  :title="works.title"
                  :amount="works.amount"
                />
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
  name: 'FreelanceRoutes',
  data () {
    return {
      routeUrl: this.$route.params.slug
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    fliteredFreelance () {
      const result = this.freelancing.filter(freelance => freelance.category === this.routeUrl)
      return result
    }
  }
}
</script>

<style scoped>
.popular-column {
  margin-right: 26px !important;
  margin-top: 10px;
}
</style>
