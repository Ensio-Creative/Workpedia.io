<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
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
        <div class="text-center mt-5">
          <b-pagination
            v-model="currentPage"
            pills
            per-page="2"
            :total-rows="jobs"
          />
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
  data () {
    return {
      currentPage: 1
    }
  },
  computed: {
    ...mapState('jobs', ['jobs'])
  }
}
</script>

<style scoped>
.categorie {
  margin-bottom: 8rem;
}
</style>
