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
            <FreelanceList
              :id="works._id"
              :title="works.title"
              :amount="works.amount"
            />
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
