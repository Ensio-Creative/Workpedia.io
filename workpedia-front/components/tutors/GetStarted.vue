<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2 class="text-center mb-4">
        Let's Get started
      </h2>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <h4>Students Details</h4>
          <div class="row mt-3">
            <div class="col">
              <label for="">Number of Students</label>
              <input
                v-model="numberStudent"
                type="text"
                class="form-control"
                placeholder="Number of Students"
                required
              >
            </div>
            <div class="col">
              <label for="">Student Class</label>
              <select
                v-model="selectClass"
                class="form-select mb-2"
                required
                @change="pushClassValue"
              >
                <option
                  v-for="classes in sudentClass"
                  :key="classes"
                  selected
                  :value="classes"
                  required
                >
                  {{ classes }}
                </option>
              </select>
              <div class="spans">
                <span
                  v-for="(students, index) in studentClasses"
                  :key="index"
                  class="mt-5 mr-3"
                  @click="popClass(index)"
                >
                  {{ students }}
                </span>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Type of Lesson</label>
              <input
                v-model="typeOfLesson"
                type="text"
                class="form-control"
                placeholder="Full-time/Part-time"
                required
              >
            </div>
          </div>
          <h4 class="mt-2">
            Students Goals
          </h4>
          <div class="row mt-3">
            <div class="col">
              <label for="">Select Curriculum</label>
              <select
                v-model="selectedCurriculum"
                class="form-select"
                required
              >
                <option
                  v-for="curriculums in curriculum"
                  :key="curriculums"
                  selected
                  :value="curriculums"
                  required
                >
                  {{ curriculums }}
                </option>
              </select>
            </div>
            <div class="col">
              <label for="">Student's Goal</label>
              <input
                v-model="studentGoal"
                type="text"
                class="form-control"
                placeholder="Goal for your child"
                required
              >
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Select Tutor Gender</label>
              <select
                v-model="selectGender"
                class="form-select"
                required
              >
                <option
                  v-for="genders in gender"
                  :key="genders"
                  selected
                  :value="genders"
                  required
                >
                  {{ genders }}
                </option>
              </select>
            </div>
            <div class="col">
              <label for="">Subject</label>
              <input
                v-model="subject"
                type="text"
                class="form-control"
                placeholder="Subject"
                required
              >
              <small>Separate student subject with a comma ,</small>
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Tell us about your student(s)</label>
              <textarea
                v-model="tellUsAboutChild"
                type="text"
                class="form-control"
                placeholder="Tell us about your child"
                aria-label="First n ame"
                rows="2"
                required
              />
            </div>
          </div>
          <AppButton
            type="submit"
            class="tutor-btn mt-3"
          >
            Next
          </AppButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'GetStarted',
  emits: ['nextToContact'],
  layout: 'getTutor',
  data () {
    return {
      errors: [],
      started: true,
      contact: false,
      lesson: false,
      studentClasses: [],
      sudentClass: [
        'Pre-nursery',
        'Nursery 1 - 3',
        'Primary 1 - 6',
        'JSS 1 - 3',
        'SSS 1 - 3',
        'Others'
      ],
      curriculum: [
        'Nigerian',
        'British',
        'American',
        'IPC',
        'Not sure'
      ],
      gender: [
        'Female',
        'Male',
        'Any gender'
      ],
      numberStudent: '',
      selectClass: '',
      typeOfLesson: '',
      selectedCurriculum: '',
      studentGoal: '',
      selectGender: '',
      subject: '',
      tellUsAboutChild: ''
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  mounted () {
    this.subject = this.$route.params.tutorId
  },
  methods: {
    ...mapMutations('tutors', ['UPDATE_REQUEST_TUTOR']),
    pushClassValue () {
      this.studentClasses.push(this.selectClass)
    },
    popClass (index) {
      if (index === 0) {
        console.log(index)
        return this.studentClasses.pop()
      }
      this.studentClasses.splice(1, index)
    },
    onSubmit () {
      this.errors = []
      if (!this.numberStudent.length) {
        this.errors.push('Please Add the Number of students')
        this.$toast.error(this.errors[0])
      } else if (!this.studentClasses.length) {
        this.errors.push('Please select class')
        this.$toast.error(this.errors[0])
      } else if (!this.typeOfLesson.length) {
        this.errors.push('Please add the type of lesson')
        this.$toast.error(this.errors[0])
      } else if (!this.selectedCurriculum.length) {
        this.errors.push('Please select a curriculum')
        this.$toast.error(this.errors[0])
      } else if (!this.studentGoal.length) {
        this.errors.push('Add students goals')
        this.$toast.error(this.errors[0])
      } else if (!this.selectGender.length) {
        this.errors.push('Select tutor gender')
        this.$toast.error(this.errors[0])
      } else if (!this.subject.length) {
        this.errors.push('Please fill every field')
        this.$toast.error(this.errors[0])
      } else if (!this.tellUsAboutChild.length) {
        this.errors.push('Please fill every field')
        this.$toast.error(this.errors[0])
      } else if (!this.errors.length) {
        const payload = {
          numberOfStudents: this.numberStudent,
          studentClass: this.studentClasses,
          lessonType: this.typeOfLesson,
          curriculum: this.selectedCurriculum,
          studentGoal: this.studentGoal,
          tutorGender: this.selectGender,
          subject: this.subject.split(','),
          moreAboutStudent: this.tellUsAboutChild
        }
        if (!this.user.token) {
          this.$store.commit('HAS_ACCOUNT', false)
          this.$toast.info('Please sign up to make a tutor request')
          return this.$router.push('/auth')
        }
        this.UPDATE_REQUEST_TUTOR(payload)
        // console.log(payload)
        this.$emit('nextToContact')
      }
    }
  }
}
</script>

<style scoped>
form{
  margin-bottom: 50px;
}
.get-tutor-input input{
  background: #FBFBFB6B 0% 0% no-repeat padding-box;
  border: 1px solid #70707073;
  border-radius: 3px;
  width: 350px;
}
.tutor-btn{
  background-color: #251E8C;
  color: #fff;
    width: 155px;
    float: right;
}
.tutor-btn-back{
  background-color: transparent;
  color: #000 !important;
  width: 155px;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #251E8C;
  outline: 0;
  box-shadow: 0 0 0 0.2rem #251E8C;
}
span {
  color: #251E8C;
  padding: 7px;
  background: #f1f1f1;
}
.spans {
  display: flex;
  justify-content: space-between;
  width: 0px;
  margin-top: 8px;
}
</style>
