<template>
  <div>
    <form @submit.prevent="onSubmit">
      <h2 class="text-center mb-4">
        Contact Information
      </h2>
      <h4>Your Contact details</h4>
      <div class="row mt-3">
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
        Submit
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AppButton from '../auth/UI-Components/AppButton.vue'
import states from '~/static/data/states.js'
export default {
  name: 'Contact',
  components: { AppButton },
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
    ...mapActions('tutors', ['sendRequest']),
    backToStarted () {
      this.$emit('nextToContact')
    },
    onSubmit () {
      this.errors = []
      if (!this.lastName.length) {
        this.errors.push('Please add your last name')
        this.$toast.error(this.errors[0])
      } else if (!this.firstName.length) {
        this.errors.push('Please add your first name')
        this.$toast.error(this.errors[0])
      } else if (!this.validEmail(this.email)) {
        this.errors.push('Add a valid email')
        this.$toast.error(this.errors[0])
      } else if (!this.hearAbout.length) {
        this.errors.push('Please tell how you heard of us')
        this.$toast.error(this.errors[0])
      } else if (!this.selectedStates.length) {
        this.errors.push('Please select a state')
        this.$toast.error(this.errors[0])
      } else if (!this.city.length) {
        this.errors.push('Please add your city')
        this.$toast.error(this.errors[0])
      } else if (!this.nearestBustop.length) {
        this.errors.push('Please add nearest bustop')
        this.$toast.error(this.errors[0])
      } else if (!this.nearestLandmark.length) {
        this.errors.push('Please add nearest landmark')
        this.$toast.error(this.errors[0])
      } else if (!this.address.length) {
        this.errors.push('Please add address')
        this.$toast.error(this.errors[0])
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
        this.sendRequest(payload)
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
input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type=number] {
  -moz-appearance: textfield;
}
</style>
