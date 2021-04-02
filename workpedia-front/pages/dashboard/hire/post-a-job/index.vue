<template>
  <div class="container">
    <HireNav />
    <div class="cross-button">
      <button
        v-b-modal.modal-lg
        class="btn btn-outline-rounded"
      >
        +
      </button>
    </div>
    <h1
      class="gray-info"
    >
      Posted jobs will be shown here
    </h1>
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
        >
          Job title
        </AppControlInput>
        <!-- <small
          :class="[validEmail(email) ? 'info-success' : 'info-error']"
        >
          {{ infoTextEmail }}
        </small> -->
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
          </div>
          <div class="col">
            <AppControlInput
              v-model.trim="city"
              type="text"
              required
            >
              City
            </AppControlInput>
            <!-- <small
              :class="[city.length < 3 ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small> -->
          </div>
        </div>
        <!-- <small
          :class="[validEmail(email) ? 'info-success' : 'info-error']"
        >
          {{ infoTextEmail }}
        </small> -->
        <AppControlInput
          type="text"
        >
          Phone
        </AppControlInput>
        <!-- <small
          :class="[password.length <= 6 ? 'info-error' : 'info-success']"
        >
          {{ infoTextPassword }}
        </small> -->
        <div class="row">
          <div class="col">
            <AppControlInput
              v-model="duration"
              type="text"
              placeholder="FullTime"
            >
              Durations
            </AppControlInput>
            <!-- <small
              :class="[password.length <= 6 ? 'info-error' : 'info-success']"
            >
              {{ infoTextPassword }}
            </small> -->
          </div>
          <div class="col">
            <AppControlInput
              v-model="experience"
              type="text"
              placeholder="a year"
            >
              Experience
            </AppControlInput>
          </div>
          <div class="col">
            <label for="">Category</label>
            <select
              v-model="category"
              class="form-select"
              aria-label="Default select example"
              required
            >
              <option
                v-for="categorySelect in categories"
                :key="categorySelect.url"
                :value="categorySelect.url"
                required
              >
                {{ categorySelect }}
              </option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Job Description*</label>
            <textarea
              type="text"
              class="form-control mb-3"
              placeholder="Job Description"
              aria-label="First n ame"
              rows="3"
            />
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
import states from '~/static/data/states.js'
import categories from '~/static/jobs/jobsRoutes.js'
export default {
  name: 'CompanyInfo',
  layout: 'dashboard',
  data () {
    return {
      jobTitle: '',
      email: '',
      phone: '',
      stateSelect: '',
      city: '',
      amount: '5000',
      duration: '',
      experience: '',
      category: '',
      categories,
      states
    }
  },
  methods: {
    checkEmail () {
      console.log(this.email)
    }
  }
}
</script>

<style scoped>
.container, .container-sm, .container-md, .container-lg {
  max-width: 1095px;
}
.gray-info {
  color: #E4E4E4;
  text-align: center;
  position: absolute;
  top: 276px;
  left: 449px;
}
form {
  padding: 5px;
}
.btn-outline-rounded {
  margin-top: 20px;
  font-size: 32px;
  color: #fff;
  background-color: #0DB47B;
  padding: auto;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  float: right;
}
</style>
