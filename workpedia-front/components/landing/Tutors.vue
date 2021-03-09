<template>
  <div>
    <section class="container private-tutor">
      <div class="heading">
        <h1>Get your tutors</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="tutor in splicedTutors"
          :key="tutor._id"
          class="col mt-4"
        >
          <div class="card">
            <div class="card-body">
              <div class="private-tutor-img-head" />
              <div class="private-tutor-text mt-2">
                <h3>{{ tutor.tutorTitle }}</h3>
              </div>
              <div class="private-tutor-info">
                <p>{{ tutor.author }}</p>
                <p>{{ tutor.courseCategory }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/tutor/categories">
          View More <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Tutors',
  computed: {
    ...mapState('tutors', ['fetchedTutors']),
    splicedTutors () {
      const listedJobs = this.fetchedTutors.slice(0, 3)
      return listedJobs
    }
  }
}
</script>

<style scoped>

</style>
