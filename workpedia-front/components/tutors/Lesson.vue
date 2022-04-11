<template>
  <div>
    <form
      @submit.prevent="onSubmit"
    >
      <h2 class="text-center mb-4">
        Lesson Schedule
      </h2>
      <div class="row mt-3">
        <div class="col">
          <label for="length-of-lesson">How long would the lesson hold?</label>
          <input
            id="length-of-lesson"
            v-model="lengthOfLesson"
            type="text"
            class="form-control"
            placeholder="4 weeks"
            required
          >
        </div>
        <div class="col">
          <label for="hours">How many hours per day?</label>
          <input
            id="hours"
            v-model="hours"
            type="text"
            class="form-control"
            placeholder="4hrs"
            required
          >
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="length-of-lesson">When do you want to start</label>
          <input
            id="length-of-lesson"
            v-model="whenDoYouStart"
            type="date"
            class="form-control"
            placeholder="4 weeks"
            required
          >
        </div>
        <div class="col">
          <label for="time">From what time?</label>
          <input
            id="time"
            v-model="time"
            type="time"
            class="form-control"
            placeholder="4hrs"
            required
          >
        </div>
      </div>
      <div class="row mt-3">
        <div class="col">
          <label for="length-of-lesson">What’s your budget per child?</label>
          <input
            id="length-of-lesson"
            v-model="budget"
            type="text"
            class="form-control"
            placeholder="NGN"
            required
          >
        </div>
      </div>
      <div class="row mt-3">
        <h4 class="mt-3">
          What days do you want the lesson to hold?
        </h4>
        <div class="col">
          <div class="form-check">
            <input
              id="mondays"
              v-model="daysOfTutor"
              class="form-check-input"
              type="checkbox"
              value="Mondays"
            >
            <label class="form-check-label" for="mondays">
              Monday
            </label>
          </div>
          <div class="form-check">
            <input
              id="tuesdays"
              v-model="daysOfTutor"
              class="form-check-input"
              type="checkbox"
              value="Tuesdays"
            >
            <label class="form-check-label" for="tuesdays">
              Tuesday
            </label>
          </div>
          <div class="form-check">
            <input
              id="wedsnesday"
              v-model="daysOfTutor"
              class="form-check-input"
              type="checkbox"
              value="Wedsnesdays"
            >
            <label class="form-check-label" for="wedsnesday">
              Wedsnesdays
            </label>
          </div>
        </div>
        <div class="col">
          <div class="form-check">
            <input
              id="thursday"
              v-model="daysOfTutor"
              class="form-check-input"
              type="checkbox"
              value="Thursdays"
            >
            <label class="form-check-label" for="thursday">
              Thursday
            </label>
          </div>
          <div class="form-check">
            <input
              id="fridays"
              v-model="daysOfTutor"
              class="form-check-input"
              type="checkbox"
              value="Fridays"
            >
            <label class="form-check-label" for="fridays">
              Friday
            </label>
          </div>
          <div class="form-check">
            <input
              id="sartuday"
              v-model="daysOfTutor"
              class="form-check-input"
              type="checkbox"
              value="Saturdays"
            >
            <label class="form-check-label" for="sartuday">
              Saturdays
            </label>
          </div>
        </div>
      </div>
      <AppButton
        type="submit"
        class="tutor-btn-back mt-5"
        @click="backToStarted"
      >
        Back
      </AppButton>
      <AppButton
        type="submit"
        class="tutor-btn mt-5"
      >
        Next
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import AppButton from '../auth/UI-Components/AppButton.vue'
export default {
  name: 'Lesson',
  components: { AppButton },
  emits: ['nextLeson'],
  data () {
    return {
      lengthOfLesson: '',
      hours: '',
      daysOfTutor: [],
      whenDoYouStart: '',
      budget: '',
      time: '',
      errors: []
    }
  },
  methods: {
    ...mapMutations('tutors', ['UPDATE_REQUEST_TUTOR']),
    backToStarted () {
      this.$emit('backStarted')
    },
    onSubmit () {
      this.errors = []
      if (this.lengthOfLesson.length <= 4) {
        this.errors.push('Please how long will the lesson go??')
        this.$toast.error(this.errors[0])
        // console.log(this.lengthOfLesson.length)
      }
      if (this.hours.length < 4) {
        this.errors.push('Please how many hours or minutes??')
        this.$toast.error(this.errors[0])
        // console.log(this.hours.length)
      }
      if (!this.daysOfTutor.length) {
        this.errors.push('Please on what days is the Lessons to hold??')
        this.$toast.error(this.errors[0])
        // console.log(this.daysOfTutor.length)
      }
      if (!this.whenDoYouStart.length) {
        this.errors.push('Please on when do you wish to start??')
        this.$toast.error(this.errors[0])
        // console.log(this.daysOfTutor.length)
      }
      if (!this.time.length) {
        this.errors.push('Please what time should lesson begin??')
        this.$toast.error(this.errors[0])
        // console.log(this.daysOfTutor.length)
      }
      if (!this.budget.length) {
        this.errors.push('Please what\' your budget??')
        this.$toast.error(this.errors[0])
        // console.log(this.daysOfTutor.length)
      }
      if (!this.errors.length) {
        const payload = {
          lengthOfLesson: this.lengthOfLesson,
          hours: this.hours,
          days: this.daysOfTutor,
          whenToStart: this.whenDoYouStart,
          timeToStart: this.time,
          budget: this.budget
        }
        // console.log(payload)
        this.UPDATE_REQUEST_TUTOR(payload)
        this.$emit('nextLeson')
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
  float: left;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #251E8C;
  outline: 0;
  box-shadow: 0 0 0 0.2rem #251E8C;
}
</style>
