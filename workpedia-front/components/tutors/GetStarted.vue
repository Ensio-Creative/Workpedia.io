<template>
  <div>
    <div
      v-if="errors.length"
      class="container color-red"
    >
      <h4>{{ errors[0] }}</h4>
    </div>
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
                class="form-select"
                required
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
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Tell us about your child</label>
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
      sudentClass: [
        'Pre-nursery',
        'Nursery 1',
        'Nursery 2',
        'Nursery 3',
        'Primary 1',
        'Primary 2',
        'Primary 3',
        'Primary 4',
        'Primary 5',
        'Primary 6',
        'JSS 1',
        'JSS 2',
        'JSS 3',
        'SSS 1',
        'SSS 2',
        'SSS 3'
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
  methods: {
    onSubmit () {
      this.errors = []
      if (!this.numberStudent) {
        this.errors.push('Please Add the Number of students')
      } else if (!this.selectClass) {
        this.errors.push('Please select class')
      } else if (!this.typeOfLesson) {
        this.errors.push('Please add the type of lesson')
      } else if (!this.selectedCurriculum) {
        this.errors.push('Please select a curriculum')
      } else if (!this.studentGoal) {
        this.errors.push('Add students goals')
      } else if (!this.selectGender) {
        this.errors.push('Select tutor gender')
      } else if (!this.subject) {
        this.errors.push('Please fill every field')
      } else if (!this.tellUsAboutChild) {
        this.errors.push('Please fill every field')
      } else if (!this.errors.length) {
        const payload = {
          numberOfStudents: this.numberStudent,
          studentClass: this.selectClass,
          lesson: this.typeOfLesson,
          curriculum: this.selectedCurriculum,
          studentGoal: this.studentGoal,
          tutorGender: this.selectGender,
          subject: this.subject,
          moreAboutStudent: this.tellUsAboutChild
        }
        this.$store.commit('UPDATE_REQUEST_TUTOR', payload)
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
  background-color: #FF9B17;
  color: #000;
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
  border-color: #ff9b17;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(255 155 23);
}
</style>
