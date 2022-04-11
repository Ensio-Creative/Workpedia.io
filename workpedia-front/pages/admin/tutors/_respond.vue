<template>
  <div class="container">
    <TopNavInfo
      dash-title="Tutors"
    />
    <TutorNav />
    <div class="row justify-content-center">
      <div class="col-12 col-md-8">
        <h3>Result details</h3>
        <div class="row">
          <div class="col-8">
            <h5>Child's Goal: {{ result.goals }}</h5>
          </div>
          <div class="col-8">
            <h5>Child's current class: {{ result.studentClass }}</h5>
          </div>
          <div class="col-8">
            <h5>Child's subject(s): {{ result.subjects }}</h5>
          </div>
          <div class="col-8">
            <h5>Child's exam: {{ result.exam }}</h5>
          </div>
          <div class="col-8">
            <h5>Child's curriculum: {{ result.curriculum }}</h5>
          </div>
          <div class="col-8">
            <h5>Tutor prefered gender: {{ result.tutorGender }}</h5>
          </div>
          <div class="col-8">
            <h5>Tutor prefered gender: {{ result.tutorGender }}</h5>
          </div>
          <div class="col-8">
            <h5>Lesson duration: {{ result.lengthOfLesson }}</h5>
          </div>
          <div class="col-8">
            <h5>Hours per day: {{ result.hours }}</h5>
          </div>
          <div class="col-8">
            <h5>When to start: {{ result.whenToStart }}</h5>
          </div>
          <div class="col-8">
            <h5>Time for lesson: {{ result.timeToStart }}</h5>
          </div>
          <div class="col-8">
            <h5>Budget: {{ result.budget }}</h5>
          </div>
          <div class="col-8">
            <h5>Days for lesson: {{ result.days }}</h5>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <h3>Contact details</h3>
        <div class="row">
          <div class="col-8">
            <h5>Full name: {{ `${result.firstName} ${result.lastName}` }}</h5>
          </div>
          <div class="col-8">
            <h5>Email: {{ result.email }}</h5>
          </div>
          <div class="col-8">
            <h5>Phone: {{ result.phone }}</h5>
          </div>
          <div class="col-8">
            <h5>How did you hear about us: {{ result.hearAbout }}</h5>
          </div>
          <div class="col-8">
            <h5>Location: {{ `${result.city}, ${result.states}` }}</h5>
          </div>
          <div class="col-8">
            <h5>Nearest bustop: {{ result.nearestBustop }}, Nearest landmark: {{ result.nearestLandmark }}</h5>
          </div>
          <div class="col-8">
            <h5>Address: {{ result.address }}</h5>
          </div>
        </div>
      </div>
    </div>
    <FooterDash
      class="mt-5"
    />
  </div>
</template>

<script>
import TutorNav from '~/components/admin/tutors/TutorNav.vue'
import FooterDash from '~/components/dashboard/FooterDash.vue'
import TopNavInfo from '~/components/Navigation/dashboard/TopNavInfo.vue'
export default {
  name: 'Respondresult',
  layout: 'admin',
  components: { FooterDash, TopNavInfo, TutorNav },
  async asyncData ({ $axios, params }) {
    const { result } = await $axios.$get(`admin/tutor-request/${params.respond}`)
    const { tutors } = await $axios.$get('admin/all-tutors')
    return { result, tutors }
  }
}
</script>

<style lang="scss" scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}
</style>
