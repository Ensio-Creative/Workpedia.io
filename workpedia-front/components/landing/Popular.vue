<template>
  <div>
    <section class="popular-jobs container">
      <div class="heading">
        <h1>Featured Jobs</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="job in jobs"
          :key="job._id"
          class="col mt-4"
        >
          <div class="card">
            <div class="card-body">
              <div class="popular-column-heading">
                <i class="fas fa-suitcase" />
                <h3>{{ job.title }}</h3>
                <p>{{ `${job.city}, ${job.state} ` }}</p>
              </div>
              <div class="popular-durations">
                <span class="gray-background">
                  <h6>{{ $moment(job.createdAt).format('LL') }}</h6>
                </span>
                <span class="gray-background">
                  <h6>{{ job.duration }}</h6>
                </span>
              </div>
              <div class="popular-button text-center">
                <NuxtLink
                  :to="`/jobs/categories/single-job/${job._id}`"
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
          View All <img src="~/assets/img/arrow.svg">
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
    ...mapState('jobs', ['jobs']),
    filteredJobs () {
      const listedJobs = this.jobs
      // if (listedJobs.length > 3) {
      //   listedJobs.slice(0, 3)
      //   return listedJobs
      // }
      return listedJobs
    }
  }
}
</script>

<style scoped>
.heading {
  color: #251E8C;
}
.popular-text {
  letter-spacing: 0px;
  color: #606060;
  height: 22px;
  overflow: hidden;
}
</style>
