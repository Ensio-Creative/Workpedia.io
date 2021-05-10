<template>
  <div class="container">
    <TopNavInfo
      dash-title="Hire"
    />
    <HireNav
      class="mt-5"
    />
    <div class="cross-button">
      <button
        v-b-modal.modal-lg
        class="btn btn-outline-rounded"
      >
        +
      </button>
    </div>
    <!-- <h1
      v-if="!results.length"
      class="gray-info"
    >
      Posted jobs will be shown here
    </h1> -->
    <PostedJob
      :found-jobs="results"
    />
    <!-- Footer -->
    <FooterDash
      class="mt-5"
    />
    <b-modal
      id="modal-lg"
      size="lg"
      :cancel-disabled="true"
      :ok-disabled="true"
    >
      <template #modal-title>
        <h5
          class="modal-title"
        >
          Post a Job
        </h5>
      </template>
      <form
        @submit.prevent="onSubmit"
      >
        <AppControlInput
          v-model.trim="jobTitle"
          type="text"
          required
          @input="checkTitle"
        >
          Job title
        </AppControlInput>
        <small
          :class="[jobTitle ? 'info-error' : 'info-success']"
        >
          {{ titleinfo }}
        </small>
        <div class="row">
          <div class="col">
            <label for="">State</label>
            <select
              v-model="stateSelect"
              class="form-select"
              aria-label="Default select example"
              required
            >
              <option
                v-for="state in states"
                :key="state"
                :value="state"
                required
              >
                {{ state }}
              </option>
            </select>
            <small
              :class="[!stateSelect.length ? 'info-error' : 'info-success']"
            >
              {{ statesInfo }}
            </small>
          </div>
          <div class="col">
            <AppControlInput
              v-model.trim="city"
              type="text"
              required
              @input="checkCity"
            >
              City
            </AppControlInput>
            <small
              :class="[!city.length ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <AppControlInput
              v-model="phone"
              type="number"
              required
              @input="checkPhone"
            >
              Phone
            </AppControlInput>
            <small
              :class="[phone.length < 11 || phone.length > 11 ? 'info-error' : 'info-success']"
            >
              {{ phoneInfo }}
            </small>
          </div>
          <div class="col">
            <AppControlInput
              v-model="amount"
              type="text"
              required
              @input="checkAmount"
            >
              Amount
            </AppControlInput>
            <small
              :class="[!amount.length ? 'info-error' : 'info-success']"
            >
              {{ amountInfo }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <AppControlInput
              v-model="duration"
              type="text"
              placeholder="FullTime"
              required
              @input="checkDuration"
            >
              Durations
            </AppControlInput>
            <small
              :class="[duration.length <= 3 ? 'info-error' : 'info-success']"
            >
              {{ durationInfo }}
            </small>
          </div>
          <div class="col">
            <AppControlInput
              v-model="experience"
              type="text"
              placeholder="a year"
              required
              @input="checkExperience"
            >
              Experience
            </AppControlInput>
            <small
              :class="[ experience.length <= 3 ? 'info-error' : 'info-success']"
            >
              {{ expericenceInfo }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <!-- <label for="">Job Description*</label> -->
            <AppTextarea
              v-model.trim="description"
              type="text"
              class="mb-3"
              placeholder="Describe"
              required
              @input="checkDescription"
            >
              Job Description*
            </AppTextarea>
            <small
              :class="[ !description.length ? 'info-error' : 'info-success']"
            >
              {{ descriptionInfo }}
            </small>
          </div>
        </div>
      </form>
      <template #modal-footer="{ cancel}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="btn-apply" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="success" @click="onSubmit">
          Submit
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import states from '~/static/data/states.js'
export default {
  name: 'PostJobs',
  layout: 'dashboard',
  // async asyncData ({ $axios, store }) {
  //   const { results } = await $axios.$get(
  //     'jobs/get-jobs'
  //   )
  //   console.log(store.state.hire)
  //   return { results }
  // },
  data () {
    return {
      socket: '',
      jobTitle: '',
      titleinfo: '',
      email: '',
      results: [],
      phone: '',
      phoneInfo: '',
      stateSelect: '',
      statesInfo: '',
      city: '',
      cityInfo: '',
      amount: '',
      amountInfo: '',
      duration: '',
      durationInfo: '',
      experience: '',
      expericenceInfo: '',
      states,
      description: '',
      descriptionInfo: '',
      errors: []
    }
  },
  computed: {
    ...mapState('hire', ['hire'])
  },
  mounted () {
    this.socket = this.$nuxtSocket({
      name: 'home'
    })
    this.socket.on('jobs', (data) => {
      console.log(data)
      if (data.action === 'create') {
        this.results.push(data.job)
      }
    })
    this.fetchData()
  },
  methods: {
    ...mapActions('jobs', ['postJob']),
    async fetchData () {
      const res = await this.$axios.$get(`jobs/get-company-job/${this.hire._id}`)
      this.results = res.results
    },
    checkTitle () {
      if (this.jobTitle.length <= 3) {
        this.titleinfo = 'Add a specific title'
        return false
      } else {
        this.titleinfo = ''
        return true
      }
    },
    checkState () {
      if (!this.stateSelect.length) {
        this.statesInfo = 'Please select a state'
        return false
      } else {
        this.statesInfo = ''
        return true
      }
    },
    checkCity () {
      if (!this.city.length) {
        this.cityInfo = 'Please add your city'
        return false
      } else {
        this.cityInfo = ''
        return true
      }
    },
    checkPhone () {
      if (this.phone.length < 11 || this.phone.length > 11) {
        this.phoneInfo = 'Phone should be 11 characters'
        return false
      } else {
        this.phoneInfo = ''
        return true
      }
    },
    checkAmount () {
      if (!this.amount.length) {
        this.amountInfo = 'Amount can not be empty'
        return false
      } else {
        this.amountInfo = ''
        return true
      }
    },
    checkDuration () {
      if (this.duration.length <= 3) {
        this.durationInfo = 'Please add duration eg: Part-time'
        return false
      } else {
        this.durationInfo = ''
        return true
      }
    },
    checkExperience () {
      if (this.experience.length <= 3) {
        this.expericenceInfo = 'Please add experience eg: 5 years'
        return false
      } else {
        this.expericenceInfo = ''
        return true
      }
    },
    checkDescription () {
      if (!this.description.length) {
        this.descriptionInfo = 'Please add description'
        return false
      } else {
        this.descriptionInfo = ''
        return true
      }
    },
    onSubmit () {
      this.errors = []
      if (!this.checkTitle() && !this.checkState() && !this.checkCity()) {
        this.errors.push('Please fill every field')
      }
      if (!this.checkPhone() && !this.checkAmount() && !this.checkDuration()) {
        this.errors.push('Please fill every field')
      }
      if (!this.checkExperience() && !this.checkDescription()) {
        this.errors.push('Please fill every field')
      }
      if (!this.errors.length) {
        const payload = {
          title: this.jobTitle,
          phone: this.phone,
          state: this.stateSelect,
          city: this.city,
          amount: this.amount,
          duration: this.duration,
          experience: this.experience,
          description: this.description
        }
        this.postJob(payload)
        this.jobTitle = ''
        this.phone = ''
        this.description = ''
        this.stateSelect = ''
        this.city = ''
        this.amount = ''
        this.duration = ''
        this.category = ''
        this.experience = ''
      }
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1050px;
}

form {
  padding: 5px;
}

.btn-outline-rounded {
  margin-top: 20px;
  font-size: 32px;
  color: #fff;
  background-color: #251E8C;
  padding: auto;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  float: right;
}

</style>
