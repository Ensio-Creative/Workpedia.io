<template>
  <div>
    <div
      v-if="errors.length"
      class="container color-red"
    >
      <h4>{{ errors[0] }}</h4>
    </div>
    <form
      @submit.prevent="onSubmit"
    >
      <h2 class="text-center mb-4">
        Lesson Schedule
      </h2>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
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
              <label for="hours">How many hours per week?</label>
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
            @click="backToContact"
          >
            Back
          </AppButton>
          <AppButton
            type="submit"
            class="tutor-btn mt-5"
          >
            Submit
          </AppButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Lesson',
  emits: ['backContact'],
  data () {
    return {
      lengthOfLesson: '',
      hours: '',
      daysOfTutor: [],
      errors: []
    }
  },
  methods: {
    ...mapActions('tutors', ['sendRequest']),
    backToContact () {
      this.$emit('backContact')
    },
    onSubmit () {
      this.errors = []
      if (this.lengthOfLesson.length <= 4) {
        this.errors.push('Please how long will the tutoring go??')
        console.log(this.lengthOfLesson.length)
      }
      if (this.hours.length < 4) {
        this.errors.push('Please how many hours or minutes??')
        console.log(this.hours.length)
      }
      if (!this.daysOfTutor.length) {
        this.errors.push('Please on what days is the Lessons to hold??')
        console.log(this.daysOfTutor.length)
      }
      if (!this.errors.length) {
        const payload = {
          lengthOfLesson: this.lengthOfLesson,
          hours: this.hours,
          days: this.daysOfTutor
        }
        // console.log(payload)
        this.sendRequest(payload)
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
  float: left;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #ff9b17;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgb(255 155 23);
}
.color-red{
  background: red;
  color: #fff;
  width: 426px;
  text-align: center;
  position: fixed;
  z-index: 10;
  padding: 10px;
}
</style>
