<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-10">
            <div class="row">
              <div
                v-for="job in fliteredJobs"
                :key="job.id"
                class="col-12 col-md-12 col-lg-12 popular-column"
              >
                <JobsList
                  :id="job._id"
                  :title="job.title"
                  :location="`${job.city}, ${job.state}`"
                  :day-of-post-made="job.createdAt"
                  :timeline-of-jobs="job.duration"
                  :experience="job.experience"
                  :amount="job.amount"
                  :description="job.description"
                />
              </div>
            </div>
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
  name: 'JobsRoutes',
  data () {
    return {
      routeUrl: this.$route.params.slug
    }
  },
  computed: {
    ...mapState('jobs', ['jobs']),
    fliteredJobs () {
      const result = this.jobs.filter(job => job.category === this.routeUrl)
      return result
    }
  }
}
</script>

<style scoped>
.categorie {
  margin-bottom: 8rem;
}
</style>
