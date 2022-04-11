<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-7 form-container">
        <client-only>
          <keep-alive>
            <component
              :is="activeForm"
              @nextToContact="activeForm = 'Lesson'"
              @nextLeson="activeForm = 'ContactInfo'"
              @backStarted="activeForm = 'GetStarted'"
              @backContact="activeForm = 'Lesson'"
            />
          </keep-alive>
        </client-only>
      </div>
    </div>
  </div>
</template>

<script>
import GetStarted from '~/components/tutors/GetStarted.vue'
import ContactInfo from '~/components/tutors/ContactInfo.vue'
import Lesson from '~/components/tutors/Lesson.vue'
export default {
  name: 'GetTutor',
  components: { GetStarted, ContactInfo, Lesson },
  layout: 'getTutor',
  data () {
    return {
      activeForm: 'GetStarted'
    }
  },
  methods: {
    nextToContact (e) {
      e.preventDefault()
      this.started = false
      this.contact = true
    },
    nextToLesson (e) {
      e.preventDefault()
      this.contact = false
      this.lesson = true
    },
    backToContact (e) {
      e.preventDefault()
      this.lesson = false
      this.contact = true
    },
    backToStarted (e) {
      e.preventDefault()
      this.contact = false
      this.started = true
    }
  }
}
</script>

<style scoped>
.form-container {
  background-color: #fff;
  border-radius: 30px;
  padding: 24px;
}
html {
  background-color: #f1f1ff;
}
</style>
