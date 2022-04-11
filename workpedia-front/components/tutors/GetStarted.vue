<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2 class="text-center mt-2 mb-3">
        Let's Get started
      </h2>
      <h4>Tell us about your child's need</h4>
      <div class="row mt-3">
        <div class="col">
          <label for="">What's your goal for this child?</label>
          <select
            v-model="selectedGoals"
            class="form-select"
            required
          >
            <option
              v-for="goal in goals"
              :key="goal"
              selected
              :value="goal"
              required
            >
              {{ goal }}
            </option>
          </select>
        </div>
        <div class="col">
          <label for="">What is his/her current class?</label>
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
              class="mt-1 mr-1"
              @click="popClass(index)"
            >
              {{ students }}
            </span>
          </div>
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="">What subjects?</label>
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
          <label for="">What exam is he/she preparing for?</label>
          <input
            v-model="exam"
            type="text"
            class="form-control"
            placeholder="eg: WAEC"
            required
          >
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="">Your child's school curriculum?</label>
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
          <label for="">What Gender of tutor do you prefer?</label>
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
      </div>
      <AppButton
        type="submit"
        class="tutor-btn mt-3"
      >
        Next
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import AppButton from '../auth/UI-Components/AppButton.vue'
export default {
  name: 'GetStarted',
  components: { AppButton },
  emits: ['nextToContact'],
  layout: 'getTutor',
  data () {
    return {
      errors: [],
      started: true,
      contact: false,
      lesson: false,
      exam: '',
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
      goals: [
        'Help with assignments and school work',
        'Improve phonics, reading and writing',
        'Entrance exam preparation',
        'Prepare for school tests and exam',
        'Improve grades'
      ],
      selectedGoals: '',
      selectClass: '',
      selectedCurriculum: '',
      selectGender: '',
      subject: ''
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
        return this.studentClasses.pop()
      }
      this.studentClasses.splice(1, index)
    },
    onSubmit () {
      this.errors = []
      if (!this.studentClasses.length) {
        this.errors.push('Please select class')
        this.$toast.error(this.errors[0])
      }
      if (!this.selectedCurriculum.length) {
        this.errors.push('Please select a curriculum')
        this.$toast.error(this.errors[0])
      }
      if (!this.selectedGoals.length) {
        this.errors.push('Add students goals')
        this.$toast.error(this.errors[0])
      }
      if (!this.selectGender.length) {
        this.errors.push('Select tutor gender')
        this.$toast.error(this.errors[0])
      }
      if (!this.subject.length) {
        this.errors.push('Please fill every field')
        this.$toast.error(this.errors[0])
      }
      if (!this.exam.length) {
        this.errors.push('Please fill every field')
        this.$toast.error(this.errors[0])
      }
      if (!this.errors.length) {
        const payload = {
          studentClass: this.studentClasses,
          curriculum: this.selectedCurriculum,
          goals: this.selectedGoals,
          tutorGender: this.selectGender,
          subjects: this.subject.split(','),
          exam: this.exam
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
  padding: 2px;
  background: #f1f1f1;
}
.spans {
  display: flex;
  justify-content: space-between;
  width: 0px;
  margin-top: 8px;
}
</style>
