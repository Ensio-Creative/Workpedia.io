<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-10">
            <div class="row">
              <div
                v-for="jobs in fliteredJobs"
                :key="jobs.id"
                class="col-12 col-md-12 col-lg-12 popular-column"
              >
                <JobsList
                  :id="jobs._id"
                  :title="jobs.title"
                  :location="jobs.location"
                  :day-of-post-made="jobs.dayOFPostMade"
                  :timeline-of-jobs="jobs.timelineOfJobs"
                  :experience="jobs.experience"
                  :description="jobs.description"
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
  name: 'JobsRoutes',
  data () {
    return {
      routeUrl: this.$route.params.slug
    }
  },
  computed: {
    ...mapState('jobs', ['job']),
    fliteredJobs () {
      const result = this.job.filter(job => job.jobCategory === this.routeUrl)
      return result
    }
  }
}
</script>

<style scoped>

</style>
