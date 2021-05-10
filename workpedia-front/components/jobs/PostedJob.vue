<template>
  <div>
    <div class="row justify-content-center mt-4">
      <div class="col-12 col-md-11 col-lg-11">
        <div class="row">
          <div
            v-for="job in foundJobs"
            :key="job._id"
            class="col-12 col-md-12 col-lg-12 popular-column"
          >
            <div class="popular-column-heading">
              <i class="fas fa-suitcase" />
              <span class="job-title">{{ job.title }}</span>
              <p>{{ `${job.city}, ${job.state}` }}</p>
              <button
                class="btn btn-outline-danger added-btn"
                @click="showMsgBoxTwo(job._id)"
              >
                Delete
              </button>
              <button
                v-b-modal.modal-job
                class="btn btn-outline-success added-btn"
                @click="findById(job._id)"
              >
                Edit
              </button>
            </div>
            <div class="popular-durations">
              <span class="gray-background">
                <h6>{{ $moment(job.createdAt).format('LL') }}</h6>
              </span>
              <span class="gray-background">
                <h6>{{ job.duration }}</h6>
              </span>
              <span class="gray-background">
                <h6> NGN {{ job.amount }}</h6>
              </span>
            </div>
            <div class="popular-text mt-3 mb-4">
              <h4>Job description</h4>
              <p
                class="card-text"
              >
                {{ job.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal
      id="modal-job"
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
          v-model.trim="foundJob.title"
          type="text"
          required
          @input="checkTitle"
        >
          Job title
        </AppControlInput>
        <small
          :class="[foundJob.title.length <= 3 ? 'info-error' : 'info-success']"
        >
          {{ titleinfo }}
        </small>
        <div class="row">
          <div class="col">
            <label for="">State</label>
            <select
              v-model="foundJob.state"
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
              :class="[!foundJob.state.length ? 'info-error' : 'info-success']"
            >
              {{ statesInfo }}
            </small>
          </div>
          <div class="col">
            <AppControlInput
              v-model.trim="foundJob.city"
              type="text"
              required
              @input="checkCity"
            >
              City
            </AppControlInput>
            <small
              :class="[!foundJob.city.length ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <AppControlInput
              v-model="foundJob.phone"
              type="number"
              required
              @input="checkPhone"
            >
              Phone
            </AppControlInput>
            <small
              :class="[foundJob.phone.length < 11 || foundJob.phone.length > 11 ? 'info-error' : 'info-success']"
            >
              {{ phoneInfo }}
            </small>
          </div>
          <div class="col">
            <AppControlInput
              v-model="foundJob.amount"
              type="text"
              required
              placeholder="00,000"
              @input="checkAmount"
            >
              Amount
            </AppControlInput>
            <small
              :class="[!foundJob.amount.length ? 'info-error' : 'info-success']"
            >
              {{ amountInfo }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <AppControlInput
              v-model="foundJob.duration"
              type="text"
              placeholder="FullTime"
              required
              @input="checkDuration"
            >
              Durations
            </AppControlInput>
            <small
              :class="[foundJob.duration.length <= 3 ? 'info-error' : 'info-success']"
            >
              {{ durationInfo }}
            </small>
          </div>
          <div class="col">
            <AppControlInput
              v-model="foundJob.experience"
              type="text"
              placeholder="1 year"
              required
              @input="checkExperience"
            >
              Experience
            </AppControlInput>
            <small
              :class="[ foundJob.experience.length <= 3 ? 'info-error' : 'info-success']"
            >
              {{ expericenceInfo }}
            </small>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <!-- <label for="">Job Description*</label> -->
            <AppTextarea
              v-model.trim="foundJob.description"
              type="text"
              class="mb-3"
              placeholder="Describe"
              required
              @input="checkDescription"
            >
              Job Description*
            </AppTextarea>
            <small
              :class="[ !foundJob.description.length ? 'info-error' : 'info-success']"
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
          Save
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import states from '~/static/data/states.js'
export default {
  name: 'PostedJobsList',
  props: {
    foundJobs: {
      type: Array,
      requried: true,
      default: (e) => {
        e = []
      }
    }
  },
  data () {
    return {
      foundJob: {
        title: '',
        state: '',
        city: '',
        phone: '',
        amount: '',
        duration: '',
        experience: '',
        category: '',
        description: ''
      },
      titleinfo: '',
      phoneInfo: '',
      statesInfo: '',
      cityInfo: '',
      amountInfo: '',
      durationInfo: '',
      expericenceInfo: '',
      states,
      descriptionInfo: '',
      errors: []
    }
  },
  methods: {
    ...mapActions('jobs', ['updateJob']),
    findById (id) {
      this.foundJob = this.foundJobs.find(job => job._id === id)
    },
    showMsgBoxTwo (id) {
      this.$bvModal.msgBoxConfirm('Are you sure you want to delete this job?', {
        title: 'Please Confirm',
        size: 'sm',
        buttonSize: 'sm',
        okVariant: 'danger',
        okTitle: 'YES',
        cancelTitle: 'NO',
        footerClass: 'p-2',
        hideHeaderClose: false,
        centered: true
      })
        .then((value) => {
          if (value) {
            console.log(id)
            this.deleteJob(id)
          }
          this.boxTwo = value
        })
        .catch((err) => {
          // An error occurred
          console.log(err)
        })
    },
    async deleteJob (id) {
      const deletedJob = await this.$axios.$delete(
        `jobs/delete-job/${id}`
      )
      if (!deletedJob) {
        console.log('Job not deleted')
      }
      const result = this.foundJobs.filter(job => job._id !== id)
      this.foundJobs = result
    },
    checkTitle () {
      if (this.foundJob.title.length <= 3) {
        this.titleinfo = 'Add a specific title'
        return false
      } else {
        this.titleinfo = ''
        return true
      }
    },
    checkState () {
      if (!this.foundJob.state.length) {
        this.statesInfo = 'Please select a state'
        return false
      } else {
        this.statesInfo = ''
        return true
      }
    },
    checkCity () {
      if (!this.foundJob.city.length) {
        this.cityInfo = 'Please add your city'
        return false
      } else {
        this.cityInfo = ''
        return true
      }
    },
    checkPhone () {
      if (this.foundJob.phone.length < 11 || this.foundJob.phone.length > 11) {
        this.phoneInfo = 'Phone should be 11 characters'
        return false
      } else {
        this.phoneInfo = ''
        return true
      }
    },
    checkAmount () {
      if (!this.foundJob.amount.length) {
        this.amountInfo = 'Amount can not be empty'
        return false
      } else {
        this.amountInfo = ''
        return true
      }
    },
    checkDuration () {
      if (this.foundJob.duration.length <= 3) {
        this.durationInfo = 'Please add duration eg: Part-time'
        return false
      } else {
        this.durationInfo = ''
        return true
      }
    },
    checkExperience () {
      if (this.foundJob.experience.length <= 3) {
        this.expericenceInfo = 'Please add experience eg: 5 years'
        return false
      } else {
        this.expericenceInfo = ''
        return true
      }
    },
    checkDescription () {
      if (!this.foundJob.description.length) {
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
      if (!this.checkExperience() && !this.checkCategory() && !this.checkDescription()) {
        this.errors.push('Please fill every field')
      }
      if (!this.errors.length) {
        const payload = {
          id: this.foundJob._id,
          title: this.foundJob.title,
          phone: this.foundJob.phone,
          state: this.foundJob.state,
          city: this.foundJob.city,
          amount: this.foundJob.amount,
          duration: this.foundJob.duration,
          experience: this.foundJob.experience,
          description: this.foundJob.description
        }
        console.log(payload)
        this.updateJob(payload)
      }
    }
  }
}
</script>

<style scoped>
.added-btn{
  float: right;
  margin-right: 10px;
}
.job-title {
  padding-left: 10px;
  font-size: 1.75rem;
}
.gray-info {
  color: #E4E4E4;
  text-align: center;
  position: absolute;
  top: 276px;
  left: 449px;
}
</style>
