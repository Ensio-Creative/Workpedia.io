<template>
  <div class="container mt-5">
    <keep-alive>
      <component
        :is="activeForm"
        class="mt-4"
        @nextToContact="activeForm = 'ContactInfo'"
        @nextLeson="activeForm = 'Lesson'"
        @backStarted="activeForm = 'GetStarted'"
        @backContact="activeForm = 'ContactInfo'"
      />
    </keep-alive>
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

</style>
