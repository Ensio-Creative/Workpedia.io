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
              <label for="">How long would the lesson hold?</label>
              <input type="text" class="form-control" placeholder="Number of Students" aria-label="First name">
            </div>
            <div class="col">
              <label for="">How many hours per week?</label>
              <input type="text" class="form-control" placeholder="Number of Students" aria-label="First name">
            </div>
          </div>
          <div class="row mt-3">
            <h4 class="mt-3">
              What days do you want the lesson to hold?
            </h4>
            <div class="col">
              <div class="form-check">
                <input
                  id="defaultCheck1"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                >
                <label class="form-check-label" for="defaultCheck1">
                  Monday
                </label>
              </div>
              <div class="form-check">
                <input
                  id="defaultCheck2"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                >
                <label class="form-check-label" for="defaultCheck2">
                  Tuesday
                </label>
              </div>
              <div class="form-check">
                <input
                  id="defaultCheck3"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                >
                <label class="form-check-label" for="defaultCheck2">
                  Wedsnesdays
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-check">
                <input
                  id="defaultCheck1"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                >
                <label class="form-check-label" for="defaultCheck1">
                  Thursday
                </label>
              </div>
              <div class="form-check">
                <input
                  id="defaultCheck2"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                >
                <label class="form-check-label" for="defaultCheck2">
                  Friday
                </label>
              </div>
              <div class="form-check">
                <input
                  id="defaultCheck3"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                >
                <label class="form-check-label" for="defaultCheck2">
                  Saturdays
                </label>
              </div>
            </div>
          </div>
          <div class="row mt-3">
            <h4>Students Goals</h4>
            <div class="col">
              <input type="text" class="form-control" placeholder="Child's Curriculum" aria-label="Child's Curriculum">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Subjects Offered" aria-label="Subjects Offered">
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <input type="text" class="form-control" placeholder="What Gender of Tutor" aria-label="What Gender of Tutor">
            </div>
            <div class="col">
              <input type="text" class="form-control" placeholder="Goal for your child" aria-label="Goal for your child">
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <textarea
                type="text"
                class="form-control"
                placeholder="Tell us about your child"
                aria-label="First n ame"
                rows="3"
              />
            </div>
          </div>
          <AppButton
            type="submit"
            class="tutor-btn-back mt-3"
            @click="backToContact"
          >
            Back
          </AppButton>
          <AppButton
            type="submit"
            class="tutor-btn mt-3"
          >
            Submit
          </AppButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Lesson',
  emits: ['backContact'],
  data () {
    return {
      date: '',
      errors: []
    }
  },
  methods: {
    backToContact () {
      this.$emit('backContact')
    },
    onSubmit () {
      console.log('logged')
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
</style>
