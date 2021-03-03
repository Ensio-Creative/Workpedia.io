<template>
  <div>
    <section class="categorie mt-5 mb-5">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-12 col-lg-9">
            <div class="row justify-content-center">
              <div
                v-for="tutor in fliteredTutors"
                :key="tutor._id"
                class="col-12 col-md-3 private-tutor-column text-center"
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
          <div class="col-12 col-md-12 col-lg-3">
            <TheSideSearch />
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
