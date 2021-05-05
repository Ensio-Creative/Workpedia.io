<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="freelancer in fliteredFreelance"
            :key="freelancer._id"
            class="col"
          >
            <FreelanceList
              :id="freelancer._id"
              :title="freelancer.title"
              :amount="freelancer.serviceCharge"
              :author="`${freelancer.userId.firstName} ${freelancer.userId.lastName}`"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- <Testimony /> -->
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
      const filter = this.routeUrl
      const filteredResult = this.freelancing.filter((item) => {
        return (item.category.includes(filter) >= 0)
      })
      return filteredResult
    }
  }
}
</script>

<style scoped>
.popular-column {
  margin-right: 26px !important;
  margin-top: 10px;
}
.categorie {
  margin-bottom: 8rem;
}
</style>
