<template>
  <div>
    <section class="popular-jobs container">
      <div class="heading">
        <h1>Our Popular Jobs</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="jobs in filteredJobs"
          :key="jobs._id"
          class="col mt-4"
        >
          <div class="card">
            <div class="card-body">
              <div class="popular-column-heading">
                <i class="fas fa-suitcase" />
                <h3>{{ jobs.title }}</h3>
                <h5>{{ jobs.location }}</h5>
              </div>
              <div class="popular-text">
                <p>
                  {{ jobs.description }}
                </p>
              </div>
              <div class="popular-durations">
                <span class="gray-background">
                  <h6>{{ jobs.dayOFPostMade }}</h6>
                </span>
                <span class="gray-background">
                  <h6>{{ jobs.timelineOfJobs }}</h6>
                </span>
                <span class="gray-background">
                  <h6>{{ jobs.experience }}</h6>
                </span>
              </div>
              <div class="popular-button text-center">
                <NuxtLink
                  :to="`/jobs/categories/single-job/${jobs._id}`"
                >
                  View Now
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/jobs/categories">
          View More <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Popular',
  computed: {
    ...mapState('jobs', ['job']),
    filteredJobs () {
      const listedJobs = this.job.slice(0, 6)
      return listedJobs
    }
  }
}
</script>

<style scoped>

</style>
