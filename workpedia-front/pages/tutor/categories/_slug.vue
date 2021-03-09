<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="tutor in fliteredTutors"
            :key="tutor._id"
          >
            <TutorList
              :id="tutor._id"
              :tutor-title="tutor.tutorTitle"
              :author="tutor.author"
              :course-category="tutor.courseCategory"
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
  name: 'SingleTutor',
  data () {
    return {
      routeUrl: this.$route.params.slug
    }
  },
  computed: {
    ...mapState('tutors', ['fetchedTutors']),
    fliteredTutors () {
      const result = this.fetchedTutors.filter(tutor => tutor.tutorCategory === this.routeUrl)
      return result
    }
  }
}
</script>

<style scoped>

</style>
