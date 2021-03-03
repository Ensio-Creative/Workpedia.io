<template>
  <div
    class="container-fluid post-a-job"
  >
    <div class="row justify-content-center">
      <div class="col-5 bg-white my-5 sub-container">
        <form>
          <div class="form-heading">
            <h2 class="my-4">
              Post a job
            </h2>
          </div>
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
                  v-for="categor in categories"
                  :key="categor"
                  :value="categor"
                  required
                >
                  {{ categor }}
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
          <AppButton
            type="submit"
            class="btn-apply my-4"
          >
            Post
          </AppButton>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostAJobs',
  layout: 'auth',
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
      categories: [
        'web-dev',
        'design',
        'writing',
        'marketing',
        'accounting',
        'business',
        'customer-service'
      ],
      states: [
        'Abia',
        'Adamawa',
        'Akwa Ibom',
        'Anambra',
        'Bauchi',
        'Bayelsa',
        'Benue',
        'Borno',
        'Cross River',
        'Delta',
        'Ebonyi',
        'Edo',
        'Ekiti',
        'Enugu',
        'FCT - Abuja',
        'Gombe',
        'Imo',
        'Jigawa',
        'Kaduna',
        'Kano',
        'Katsina',
        'Kebbi',
        'Kogi',
        'Kwara',
        'Lagos',
        'Nasarawa',
        'Niger',
        'Ogun',
        'Ondo',
        'Osun',
        'Oyo',
        'Plateau',
        'Rivers',
        'Sokoto',
        'Taraba',
        'Yobe',
        'Zamfara'
      ]
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
.sub-container{
  border-radius: 8px;
}
.btn-apply{
  background-color: #0DB47B !important;
  border-radius: 8px;
  color: #fff;
}
</style>
