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
        Contact Information
      </h2>
      <div class="row justify-content-center">
        <div class="col-12 col-md-6">
          <div class="row mt-3">
            <h4>Your Contact details</h4>
            <div class="col">
              <label for="">Last name</label>
              <input
                v-model.trim="lastName"
                type="text"
                class="form-control"
                placeholder="Last Name"
                required
              >
            </div>
            <div class="col">
              <label for="">First name</label>
              <input
                v-model.trim="firstName"
                type="text"
                class="form-control"
                placeholder="First Name"
                required
              >
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Email</label>
              <input
                v-model.trim="email"
                type="email"
                class="form-control"
                placeholder="Email Address"
                required
              >
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Phone</label>
              <input
                v-model.number="phone"
                type="number"
                class="form-control"
                placeholder="Phone Number"
                required
              >
            </div>
            <div class="col">
              <label for="">How did you hear about us</label>
              <input
                v-model.trim="hearAbout"
                type="text"
                class="form-control"
                placeholder="How did you hear about us"
                required
              >
            </div>
          </div>
          <h4 class="mt-4">
            Contact Address
          </h4>
          <div class="row mt-3">
            <div class="col">
              <label for="">Select state</label>
              <select
                v-model="selectedStates"
                class="form-select"
                required
              >
                <option
                  v-for="state in states"
                  :key="state"
                  selected
                  :value="state"
                  required
                >
                  {{ state }}
                </option>
              </select>
            </div>
            <div class="col">
              <label for="">City</label>
              <input
                v-model.trim="city"
                type="text"
                class="form-control"
                placeholder="City"
                required
              >
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Nearest Bustop</label>
              <input
                v-model="nearestBustop"
                type="text"
                class="form-control"
                placeholder="Nearest Bustop"
                required
              >
            </div>
            <div class="col">
              <label for="">Nearest Landmark</label>
              <input
                v-model="nearestLandmark"
                type="text"
                class="form-control"
                placeholder="Nearest Landmark"
                required
              >
            </div>
          </div>
          <div class="row mt-3">
            <div class="col">
              <label for="">Address</label>
              <textarea
                v-model.trim="address"
                type="text"
                class="form-control"
                placeholder="Enter Address"
                aria-label="First n ame"
                rows="2"
                required
              />
            </div>
          </div>
          <AppButton
            type="submit"
            class="tutor-btn-back mt-3"
            @click="backToStarted"
          >
            Back
          </AppButton>
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
import { mapMutations } from 'vuex'
import states from '~/static/data/states.js'
export default {
  name: 'Contact',
  emits: ['nextLeson'],
  data () {
    return {
      log: '',
      lastName: '',
      firstName: '',
      email: '',
      phone: '',
      hearAbout: '',
      selectedStates: '',
      city: '',
      nearestBustop: '',
      nearestLandmark: '',
      address: '',
      states,
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
      if (!this.lastName.length) {
        this.errors.push('Please add your last name')
      } else if (!this.firstName.length) {
        this.errors.push('Please add your first name')
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Add a valid email')
      } else if (!this.hearAbout.length) {
        this.errors.push('Please tell how you heard of us')
      } else if (!this.selectedStates.length) {
        this.errors.push('Please select a state')
      } else if (!this.city.length) {
        this.errors.push('Please add your city')
      } else if (!this.nearestBustop.length) {
        this.errors.push('Please add nearest bustop')
      } else if (!this.nearestLandmark.length) {
        this.errors.push('Please add nearest landmark')
      } else if (!this.address.length) {
        this.errors.push('Please add address')
      } else if (!this.errors.length) {
        const payload = {
          lastName: this.lastName,
          firstName: this.firstName,
          email: this.email,
          phone: this.phone,
          hearAbout: this.hearAbout,
          states: this.selectedStates,
          city: this.city,
          nearestBustop: this.nearestBustop,
          nearestLandmark: this.nearestLandmark,
          address: this.address
        }
        this.UPDATE_REQUEST_TUTOR(payload)
        this.$emit('nextLeson')
      }
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
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
