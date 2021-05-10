<template>
  <div>
    <section class="container private-tutor">
      <div class="heading">
        <h1>Subject categories</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="tutor in listedCourse"
          :key="tutor.title"
        >
          <NuxtLink
            :to="`/tutor/categories/${tutor.url}`"
            class="col"
          >
            <div class="card h-80">
              <!-- <img :src="tutor.image" alt="DID not"> -->
              <div
                class="thumbnail"
                :style="{backgroundImage:'url(' + tutor.image + ')'}"
              />
              <div class="card-body">
                <div class="private-tutor-text">
                  <h3>{{ tutor.title }}</h3>
                </div>
                <div class="private-tutor-info">
                  <p>{{ tutor.description }}</p>
                </div>
              </div>
              <!-- <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> -->
            </div>
          </NuxtLink>
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
import listedCourse from '~/static/tutor/tutorRoutes.js'
export default {
  name: 'Tutors',
  data () {
    return {
      listedCourse
    }
  },
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
.private-tutor{
  margin-top: 80px;
  margin-bottom: 80px;
}
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
.heading {
  padding-top: 0px;
  padding-bottom: 7px;
  color: #251E8C;
}
</style>
