<template>
  <div class="container">
    <form @submit.prevent="onSave">
      <div class="row">
        <div class="col">
          <label for="">Select Category</label>
          <select
            v-model.trim="category"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option
              v-for="selectCategory in tutorcategories"
              :key="selectCategory.url"
              :value="selectCategory.url"
              selected
              required
            >
              {{ selectCategory.title }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="">Select Subject</label>
          <select
            v-model.trim="subject"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option
              v-for="tutorSubject in subjects"
              :key="tutorSubject"
              selected
              :value="tutorSubject"
              required
            >
              {{ tutorSubject }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="">Select Class</label>
          <select
            v-model.trim="classes"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option
              v-for="selectClass in classesSelect"
              :key="selectClass"
              :value="selectClass"
              selected
              required
            >
              {{ selectClass }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="">What you would cover</label>
          <textarea
            v-model.trim="whatYouWouldCover"
            type="text"
            class="form-control mb-3"
            placeholder="Be specific either in a topic or more!!"
            rows="2"
            required
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <label for="">Description</label>
          <textarea
            v-model="description"
            type="text"
            class="form-control mb-3"
            placeholder="Need to change Description?"
            aria-label="First n ame"
            rows="3"
            required
          />
        </div>
      </div>
      <AppButton
        type="submit"
        class="tutor-btn mb-3"
      >
        Save
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import subjects from '~/static/tutor/subjects.js'
import tutorcategories from '~/static/tutor/tutorRoutes.js'
export default {
  name: 'TutorDetails',
  emits: ['changeComponent'],
  data () {
    return {
      subject: '',
      classes: '',
      category: '',
      whatYouWouldCover: '',
      description: '',
      subjects,
      tutorcategories,
      classesSelect: [
        'Kindergarten',
        'class 1 - 5',
        'Junior 1 - 3',
        'Senior 1 - 3',
        'Beyound'
      ]
    }
  },
  computed: {
    ...mapState('tutors', ['tutor'])
  },
  mounted () {
    this.subject = this.tutor.tutorSubject
    this.classes = this.tutor.tutoredClass
    this.whatYouWouldCover = this.tutor.courseCategory
    this.category = this.tutor.tutorCategory
    this.description = this.tutor.description
  },
  methods: {
    ...mapActions('tutors', ['updateTutor']),
    onSave () {
      const payload = {
        tutorSubject: this.subject,
        tutoredClass: this.classes,
        courseCategory: this.whatYouWouldCover,
        tutorCategory: this.category,
        description: this.description
      }
      // console.log(payload)
      this.updateTutor(payload)
      this.$emit('changeComponent')
    }
  }
}
</script>

<style scoped>
.tutor-btn{
  background-color: #251E8C;
  color: #000;
    width: 155px;
    float: right;
}
</style>
